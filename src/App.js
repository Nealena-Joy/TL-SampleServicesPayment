import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavbarTop from './components/auth/NavbarTop';
import HomePage from './components/auth/home';
import AboutPage from './components/auth/about';
import ProductsList from './components/paymentsComponents/productsList';
import Footer from './components/auth/footer';

export default function App() {

    return(
        <HashRouter className='App'>
            <NavbarTop />
            <Routes className='routes'>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ProductsList/>} />
            </Routes>        
            <Footer />
        </HashRouter>
    );
}