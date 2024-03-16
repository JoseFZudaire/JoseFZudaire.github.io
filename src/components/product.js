import React from 'react';
import Button from 'react-bootstrap/Button';
import ShoppingCart from './shoppingCart';
import { useNavigate } from "react-router-dom";

function Product({productName, image, price, description}) {
    let navigate = useNavigate(); 
    const routeChange = (onePath) => { 
        navigate(onePath, { state: { prodName: productName, prodPrice: price, prodImage: image, prodDescription: description} });
    }

    return(
        // <div style={{position: "relative",
        //         border:"2px solid black", borderRadius:"20px", padding: "20px", textAlign: "center", height: "auto",
        //         minWidth: "300px"}}>
        <Container>
        <div style={{justifyContent: "left", position: "relative",
                border:"2px solid black", borderRadius:"20px", padding: "20px", textAlign: "center", height: "auto",
                minWidth: "300px"}}>
            <div className="prodName">
                {productName}
            </div><br/>
            <div style={{height: 100}}>
                <img src={image} style={{maxWidth:100, maxHeight:100}}/>
            </div>
            <ShoppingCart price={price} name={productName} imgsrc={image}/>
            <Button onClick={() => routeChange('/viewDetails')} variant="secondary" style={{border: "1px solid white", margin: "5px", position: "relative", top: "5vh", left: "6vw"}}>
                {"Ver detalles"}
            </Button>
            <br/><br/>
        </div>
        </Container>) 
} 

export default Product;