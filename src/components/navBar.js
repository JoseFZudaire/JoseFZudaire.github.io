import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import '../styles.css';

function NavBar() {
    let navigate = useNavigate(); 
    const routeChange = (onePath) => { 
        navigate(onePath);
    }

    const [isShrunk,setShrunk] = useState(false);

    useEffect(() => {
        const handler = () => {
            setShrunk((isShrunk) => {
                if (!isShrunk &&
                  (document.body.scrollTop > 60 ||
                    document.documentElement.scrollTop > 60)) {
                  return true;
                }
        
                if (isShrunk &&
                  document.body.scrollTop < 60 &&
                  document.documentElement.scrollTop < 60) {
                  return false;
                }
        
                return isShrunk;
            });
        };
    
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return(
    <div>
        <div className="pageFormat" style={{height: `${isShrunk ? "15vh" : "40vh"}`, transition: "0.45s"}}>
            <div style={{textAlign: "center", fontSize:"40px", fontWeight:"bold", top: `${isShrunk ? "0vh" : "13vh"}`,
                position: "relative", visibility: `${isShrunk ? "hidden" : "visible"}`}} >
                {"Raide Energy"}
            </div>
        </div>
        
        <div className="navBar" style={{top: `${isShrunk ? "5%" : "31%"}`, transition: "0.45s"}}>
            <Button onClick={() => routeChange('/')} variant="dark" style={{border: "1px solid white", margin: "5px"}}>{"Inicio"}</Button>
            <Button onClick={() => routeChange('/productos')} variant="dark" style={{border: "1px solid white", margin: "5px"}}>{"Productos"}</Button>
            <Button onClick={() => routeChange('/info-contacto')} variant="dark" style={{border: "1px solid white", margin: "5px"}}>{"Contacto"}</Button>
            {/* <Button onClick={() => routeChange('/viewShoppingCart')} variant="dark" style={{border: "1px solid white", margin: "5px"}}>{"Carrito"}</Button> */}
        </div>
        <Outlet/>
    </div>) 
    
}

export default NavBar;