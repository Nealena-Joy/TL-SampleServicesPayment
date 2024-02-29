import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavbarTop from './components/auth/NavbarTop';
import ProductsList from './components/paymentsComponents/productsList';


export default function App() {

    return(
        <Router className='App'>
            <NavbarTop />
            <Routes className='routes'>
                <Route path="https://Nealena-Joy.github.io/TL-SampleServicesPayment" element={<ProductsList/>} />
            </Routes>        
        </Router>
    );
}