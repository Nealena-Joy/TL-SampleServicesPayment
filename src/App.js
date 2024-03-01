import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavbarTop from './components/auth/NavbarTop';
import HomePage from './components/paymentsComponents/home';
import AboutPage from './components/paymentsComponents/about';
import ProductsList from './components/paymentsComponents/productsList';


export default function App() {

    return(
        <HashRouter className='App'>
            <NavbarTop />
            <Routes className='routes'>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ProductsList/>} />
            </Routes>        
        </HashRouter>
    );
}