import React from 'react';
import '../styles.css';
import PageSetup from '../components/pageSetup';
import {useLocation} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ShoppingCart from '../components/shoppingCart';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const DataSheet = () => { 
    const {state} = useLocation();
    const { prodName, prodPrice, prodImage, prodDescription } = state;

    return(<PageSetup generalTitle="Raide Energy" pageTitle={prodName}>
        <div style={{textAlign: "left", paddingTop: "20px", paddingLeft: "50px", position: "relative",
                top: "35vh", fontSize: "20px"}}>
            <div style={{justifyContent: "center", display: "flex", paddingTop: "30px"}}>
                <Row>
                    <Col style={{justifyContent:"center", paddingTop: "40px", zIndex: "-1"}}>
                        <AwesomeSlider style={{width: "400px"}}>
                            <div data-src={prodImage} />
                            <div data-src={prodImage}/>
                            <div data-src={prodImage}/>
                        </AwesomeSlider>
                    </Col>
                    <Col>
                        <Container style={{position: "relative", border:"2px solid black", borderRadius:"20px", 
                            padding: "20px", textAlign: "center", height: "auto", minWidth: "300px", display: "inline-block",
                            maxWidth: "350px"}}>
                            {prodDescription}
                        </Container>
                    </Col>
                    <Col>
                        <Container style={{display: "inline-block", justifyContent: "center", textAlign: "center",
                            border:"2px solid grey", borderRadius:"20px", padding: "40px", backgroundColor: "lightgrey"}}>
                            <ShoppingCart price={prodPrice} name={prodName} imgsrc={prodImage}/>
                        </Container>
                    </Col>
                </Row>
            </div>
            <br/><br/>
            <br/>
        </div>
    </PageSetup>) 
}

export default DataSheet;
