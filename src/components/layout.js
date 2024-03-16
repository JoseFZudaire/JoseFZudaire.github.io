// import Button from 'react-bootstrap/Button';
// import { Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import React from 'react';
// import '../styles.css';

// function Layout() {
//     let navigate = useNavigate(); 
//     const routeChange = (onePath) => { 
//         navigate(onePath);
//     }
    
//     return(
//     <>
//         <div className="navBar">
//             <Button onClick={() => routeChange('/')} variant="dark" style={{border: "1px solid white", margin: "5px"}}>{"Inicio"}</Button>
//             <Button onClick={() => routeChange('/productos')} variant="dark" style={{border: "1px solid white", margin: "5px"}}>{"Productos"}</Button>
//             <Button onClick={() => routeChange('/info-contacto')} variant="dark" style={{border: "1px solid white", margin: "5px"}}>{"Contacto"}</Button>
//         </div>
//         <Outlet/>
//     </>) 
    
// }

// export default Layout;