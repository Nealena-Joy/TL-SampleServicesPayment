import React from 'react';
import { HashRouter, HashRouter as Router } from "react-router-dom";
import './App.css';
import NavbarTop from './components/auth/NavbarTop';
import AboutPage from './components/paymentsComponents/about'
import ProductsList from './components/paymentsComponents/productsList';


export default function App() {

    return(
        <Router className='App'>
            <NavbarTop />
            <HashRouter className='routes'>
                <Route path="/TL-SampleServicesPayment/about" element={<AboutPage />} />
                <Route path="/TL-SampleServicesPayment/services" element={<ProductsList/>} />
            </HashRouter>        
        </Router>
    );
}