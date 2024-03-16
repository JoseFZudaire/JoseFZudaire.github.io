import React, {useState, useEffect, useCallback} from 'react';
import '../styles.css';
import PageSetup from '../components/pageSetup';
import {useLocation} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap';

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";

// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-2010747068631903-021718-8dd760740f21f72f8ceefe54f8db27a6-536365689' });


const Item = (titulo, prodPrice, prodUnits, imgSrc, prodId) => { 
    return { titulo: titulo, prodPrice: prodPrice, prodUnits: prodUnits, imgSrc: imgSrc, prodId: prodId } 
}

const ShoppingCartView = () => { 
    const {state} = useLocation();
    const { titulo, prodPrice, prodUnits, imgSrc, prodId } = state;

    const [items, setItems] = useState([]);
    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago('TEST-a8d0a2d2-60fb-44ce-829a-a5a9590db47e', {
        locale: "es-AR",
    });

    const createPreference = async() => {
        try {
            const response = await axios.post("http://localhost:5500/create_preference", {
                title: "UnProducto",
                quantity: 1,
                price: 200,
            });

            const {id} = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuy = async () => {
        const id = await createPreference();
        if(id) {
            setPreferenceId(id);
        }
    }

    const alertUser = (e) => {
        console.log("User alerted");
        localStorage.setItem("reload", true);
        alert("Unloading!");

        e.preventDefault();
        e.returnValue = "";
    };

    console.log("Client: " + JSON.stringify(client));

    const body = {
        items: [
        {
            title: 'Mi producto',
            quantity: 1,
            unit_price: 2000
        }
        ],
    };

    useEffect(() => {

        window.addEventListener("beforeunload", alertUser);

        console.log("Local Storage: " + localStorage.getItem("Items"));

        console.log("Value of reload is: " + localStorage.getItem("reload"))

        if(!JSON.parse(localStorage.getItem("reload"))) {
            console.log("New element");
            const newItem = Item(titulo, prodPrice, prodUnits, imgSrc, prodId);

            if(localStorage.getItem("Items") != null) {
                localStorage.setItem("Items", JSON.stringify([...JSON.parse(localStorage.getItem("Items")), newItem]));
            } else {
                localStorage.setItem("Items", JSON.stringify([newItem]));
            }
        }

        localStorage.setItem("reload", false);
        
        setItems(JSON.parse(localStorage.getItem("Items")));

        return () => {
            window.removeEventListener("beforeunload", alertUser);
          };

    }, [titulo, prodPrice, prodUnits, imgSrc, prodId]);

    return(<PageSetup generalTitle="Raide Energy" pageTitle="Carrito de Compras">
        <Row style={{width: "100vw"}}>
            <Col>
                <Container style={{top: "45vh", position: "relative", display: "block", border: "2px solid black",
                    borderRadius: "15px"}}>
                    <Row>
                        <Col/>
                        <Col style={{textAlign: "center"}}>Producto</Col>
                        <Col style={{textAlign: "center"}}>Precio Unitario</Col>
                        <Col style={{textAlign: "center"}}>Unidades</Col>
                        <Col/>
                        <Col style={{textAlign: "center"}}>Precio Total</Col>
                    </Row>
                    <div style={{textAlign: "center", margin: "auto"}}>
                        {(items.length == 0) && "No hay productos en este carrito"}
                    </div>

                    {items.map(item => {
                        return(
                            <Row>
                                <Col style={{textAlign: "left"}}>
                                    <img src={item.imgSrc} style={{maxWidth:100, maxHeight:100}}/>
                                </Col>
                                <Col style={{textAlign: "left", margin: "auto"}}>{item.titulo}</Col>
                                <Col style={{textAlign: "center", margin: "auto"}}>{item.prodPrice}</Col>
                                <Col style={{textAlign: "center", margin: "auto"}}>
                                    <Button variant='primary' onClick={() => {
                                            console.log("minus");
                                            if(item.prodUnits > 1) {
                                                localStorage.setItem("Items",JSON.stringify(JSON.parse(localStorage.getItem("Items")).map(el =>
                                                    {
                                                        if(el.prodId == item.prodId) {
                                                            el.prodUnits--;
                                                        }
                                                        return el;
                                                    }
                                                )));

                                                setItems(items.map(el => {
                                                    if(el.prodId == item.prodId) {
                                                        el.prodUnits--;
                                                        return el;
                                                    }
                                                    return el;
                                                }));
                                            }
                                        }} style={{padding: "3px", borderRadius: "5px", padding: "5px", textAlign: "center", 
                                        display: "inline-block", wrap: "flex", height: "30px"}}>-</Button>
                                    {item.prodUnits}
                                    <Button variant='primary' onClick={() => {
                                            console.log("plus");
                                            localStorage.setItem("Items",JSON.stringify(JSON.parse(localStorage.getItem("Items")).map(el =>
                                                {
                                                    if(el.prodId == item.prodId) {
                                                        el.prodUnits++;
                                                    }
                                                    return el;
                                                }
                                            )));

                                            setItems(items.map(el => {
                                                if(el.prodId == item.prodId) {
                                                    el.prodUnits++;
                                                    return el;
                                                }
                                                return el;
                                            }));
                                        }} style={{padding: "3px", borderRadius: "5px", padding: "5px", textAlign: "center", 
                                        heigth: "5px", wrap: "flex", height: "30px"}}>+</Button>
                                </Col>
                                <Col style={{textAlign: "center", margin: "auto"}}>
                                    <Button  onClick={() => {
                                            localStorage.setItem("Items",JSON.stringify(JSON.parse(localStorage.getItem("Items")).filter(el =>
                                                { return el.prodId != item.prodId }
                                            )));
                                            setItems(items.filter(el => {return el.prodId != item.prodId}))
                                        }}>
                                        {"Eliminar"}
                                    </Button>
                                </Col>
                                <Col style={{textAlign: "center", margin: "auto"}}>
                                    {"$" + item.prodPrice*item.prodUnits}
                                </Col>
                            </Row>);
                    })}
                </Container>
            </Col>
            <Col md= "auto">
                {/* <Container style={{position: "relative", display: "block", top: "50vh"}}> */}
                    <Button onClick={handleBuy} style={{position: "relative", display: "block", top: "50vh"}}>
                        {"Comprar"}
                    </Button>
                    {preferenceId && <Wallet initialization={{ preferenceId: preferenceId}} customization={{ texts:{ valueProp: 'smart_option'}}}/>}
                    {/* <Wallet initialization={{ preferenceId: "234" }} customization={{ texts:{ valueProp: 'smart_option'}}}/> */}
                {/* </Container> */}
            </Col>
        </Row>

    </PageSetup>) 
}

export default ShoppingCartView;