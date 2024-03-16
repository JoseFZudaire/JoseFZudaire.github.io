import React from 'react';
import '../styles.css';
import PageSetup from '../components/pageSetup';
import noConnection from '../image/astronaut.jpg';

const noPage = () => { 
    return(<PageSetup generalTitle="Raide Energy" pageTitle="Página no encontrada">
        <img src={noConnection} style={{height: "200px", marginRight: "auto", marginLeft: "auto", display: "block", position: "relative", top: "40vh"}}/>
    </PageSetup>) 
}

export default noPage;