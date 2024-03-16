import {React, useState, useEffect} from 'react';
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../components/product';
import PageSetup from '../components/pageSetup';
import {Container, Row, Col} from 'react-bootstrap';

import anImage from '../image/solar-panels.jpg';

var numberOfProducts = [["Panel Solar de 500W", "500.00", "unaDescripcion"], 
              ["Panel Solar de 380W", "380.00", "unaDescripcion"], 
              ["Generador Eólico 1000W", "200.00", "unaDescripcion"], 
              ["Producto 4", "0.00", "unaDescripcion"], 
              ["Producto 5", "0.00", "unaDescripcion"], 
              ["1", "42", "unaDescripcion"], 
              ["1", "243.00", "unaDescripcion"]];

function productSetup (callback) {
    fetch('http://localhost:5500/getProducts',
    {
        method: 'GET',
        headers: { "Content-Type": 'application/json' }
    })
    .then((response) => {
        return response.json();
    })
    .then(async(data) => {
        callback(data);
    })
}

const Products = () => { 

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5500/getProducts',
            {
                method: 'GET',
                headers: { "Content-Type": 'application/json' }
            })
            .then(async(response) => {
                setItems((await response.json()).products)
                console.log(await items);
            })
    }, []);

    // return(<PageSetup pageTitle="Productos" style={{justifyContent: "left"}}>
    return(<PageSetup pageTitle="Productos" style={{justifyContent: "center"}}>
        <Container style={{top: "45vh", position: "relative", display: "block"}}>
        {/* <Container style={{top: "45vh", position: "relative", display: "flex", justifyContent: "left"}}> */}
            <Row style={{justifyContent: "center"}}>
                {items && items.map((item,i) => {
                    // return (<Col style={{justifyContent: "center", display: "flex", paddingBottom: "30px", margin: "0px", maxWidth: "380px"}} sm>
                    return (<Col style={{justifyContent: "center", display: "flex", paddingBottom: "30px", margin: "0px", maxWidth: "380px", md:"auto"}}>
                        <Product productName={item.name} image={anImage} price={item.price} description={item.description}/>
                    </Col>)
                })}
            </Row>
        </Container>
    </PageSetup>) 
}

export default Products;