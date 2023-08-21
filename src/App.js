import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import Envios from './pages/Envios'
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';
import Itemdetailcontainer from './components/Itemdetailcontainer/Itemdetailcontainer'
import Footer from './components/Footer/Footer'
import Checkout from './components/Checkout/Checkout'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from './components/Cart/Cart'
import MyProvider from './context/CartContext';
import Indexcontainer from './components/Indexcontainer/Indexcontainer'
import { Checkoutend } from './components/Checkout/Checkout';
import Ubicacion from './pages/Ubicacion';
import About from './pages/About';
import { exportDataToFirestore } from './services/firestore';

function App() {
    return (
            <BrowserRouter>
                 <div className='app__container'>
                    <MyProvider>                      
                        <Header />
                            <button onClick={exportDataToFirestore}>Mostrar datos</button>
                        <Routes> 
                            <Route path="/" element={ < Indexcontainer />}/>
                            <Route path="/products" element={ < Itemlistcontainer />}/>
                            <Route path="/category/:cat" element={ < Itemlistcontainer />}/>
                            <Route path="/type/:type" element={ < Itemlistcontainer />}/>
                            <Route path="/producto/:id" element={< Itemdetailcontainer />}/>
                            <Route path="/cart" element={ <Cart/> } />
                            <Route path="/checkout" element={<Checkout/>}/>
                            <Route path="/checkout/:orderid" element={<Checkoutend/>}/>
                            <Route path="/envios" element={<Envios/>}/>
                            <Route path="/ubicacion" element={<Ubicacion/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="*" element={ <h1> 404: Te perdiste</h1> } />
                        </Routes>                  
                    </MyProvider>
                </div>
                <Footer/>
            </BrowserRouter>
    );
}

export default App;
