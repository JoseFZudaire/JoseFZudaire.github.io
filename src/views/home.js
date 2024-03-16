import React from 'react';
import '../styles.css';
import PageSetup from '../components/pageSetup';

const home = () => { 
    return(<PageSetup pageTitle="Home">
        <div style={{textAlign: "left", fontSize: "20px", paddingTop: "20px", paddingLeft: "50px", 
                position: "relative", top: "40vh"}}>
            {"Nuestra compañía se especializa en la fabricación de generadores eólicos y de paneles fotovoltaicos."}
        </div>
    </PageSetup>) 
}

export default home;