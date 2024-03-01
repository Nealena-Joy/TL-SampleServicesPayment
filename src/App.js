import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavbarTop from './components/auth/NavbarTop';
import AboutPage from './components/paymentsComponents/about'
import ProductsList from './components/paymentsComponents/productsList';


export default function App() {

    return(
        <HashRouter className='App'>
            <NavbarTop />
            <Routes className='routes'>
                <Route path="#/test" element={<AboutPage />} />
                <Route path="#/TL-SampleServicesPaymen/services" Component={<ProductsList/>} />
            </Routes>        
        </HashRouter>
    );
}