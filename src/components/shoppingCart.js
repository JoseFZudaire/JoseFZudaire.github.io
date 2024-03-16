import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import { FaShoppingCart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
// import {useState} from 'react';

const ShoppingCart = ({price, name, imgsrc}) => { 

    const [units, setUnits] = useState(1); 
    let navigate = useNavigate(); 
    const routeChange = (onePath) => { 
        navigate(onePath, { state: { titulo: name, prodPrice: price, prodUnits: units, 
            imgSrc: imgsrc, prodId: Math.floor(Math.random()*1000000000000)} });
    }

    return(
        <div>
            <FaShoppingCart/>&nbsp;&nbsp;&nbsp;{"$" + price}
            &nbsp;&nbsp;&nbsp;
            <div style={{display: "inline-block", justifyContent: "center", borderRadius: "5px"}}>
                <Button onClick={() => routeChange('/viewShoppingCart')} variant="dark" style={{border: "1px solid white"}}>
                    {"Agregar"}
                </Button>
            </div>
            <br/><br/>
            <Container style={{height: "25px"}}>
                {"Unidades: "}
                <Button variant='primary' onClick={() => {if(units > 1) setUnits(units - 1)}} style={{padding: "3px", borderRadius: "5px", padding: "5px", textAlign: "center", 
                    display: "inline-block", wrap: "flex", height: "30px"}}>-</Button>
                &nbsp;&nbsp;{units}&nbsp;&nbsp;
                <Button variant='primary' onClick={() => setUnits(units + 1)} style={{padding: "3px", borderRadius: "5px", padding: "5px", textAlign: "center", 
                    heigth: "5px", wrap: "flex", height: "30px"}}>+</Button>
                <br/><br/>
            </Container>
        </div>)
}

export default ShoppingCart;
