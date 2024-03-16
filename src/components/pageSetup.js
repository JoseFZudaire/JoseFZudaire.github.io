import React from 'react';
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../components/banner';
import NavBar from '../components/navBar';
import Title from '../components/title';

const pageSetup = ({pageTitle, children}) => { 
    return(
        <>
            <div style={{position: "relative", top: "40vh"}}>
                <Title name={pageTitle}/>
            </div>
            {children}
        </>)
}

export default pageSetup;