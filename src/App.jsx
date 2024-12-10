import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No necesitamos BrowserRouter aquí

import { AppProvider } from './context/AppContext';
import Home from './routes/Home';
import Cart from './Cart';
import Favs from './routes/Favs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Form from './components/Form'; // Importar el formulario

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/form" element={<Form />} /> {/* Nueva ruta para el formulario */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
