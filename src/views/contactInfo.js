import React from 'react';
import '../styles.css';
import PageSetup from '../components/pageSetup';

const contactInfo = ({navBar}) => { 
    return(<PageSetup generalTitle="Raide Energy" pageTitle="Info de Contacto">
        <div style={{textAlign: "left", paddingTop: "20px", paddingLeft: "50px", position: "relative",
                top: "40vh", fontSize: "20px",}}>
            {"Cel: +54 011 6205 9438"}<br/>{"Mail: zudairejosefrancisco@gmail.com"}
        </div>
    </PageSetup>) 
}

export default contactInfo;