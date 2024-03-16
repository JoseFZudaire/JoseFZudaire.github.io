import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import Banner from './components/banner';
import Product from './components/product';
import NavBar from './components/navBar';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import ContactInfo from './views/contactInfo';
import Home from './views/home';
import Products from './views/products';
import NoPage from './views/noPage';
import DataSheet from './views/dataSheet';
import Layout from './components/navBar';
import ShoppingCartView from './views/shoppingCartView';

import anImage from './image/solar-panels.jpg';

var numberOfProducts = [["Panel Solar de 500W", "500.00"], 
              ["Panel Solar de 380W", "380.00"], 
              ["Generador Eólico 1000W", "200.00"], 
              ["Producto 4", "0.00"], 
              ["Producto 5", "0.00"], 
              ["1", "42"], 
              ["1", "243.00"]];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Products />} />
          <Route path="info-contacto" element={<ContactInfo />} />
          <Route path="viewDetails" element={<DataSheet />} />
          <Route path="viewShoppingCart" element={<ShoppingCartView />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        {/* <Route path="viewDetail-" */}
      </Routes>
    </Router>
  );
}

export default App;
