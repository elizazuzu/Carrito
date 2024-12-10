
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Asegúrate de tener el Router aquí
import App from './App';
import { AppProvider } from './context/AppContext'; // Importar el AppProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router> {/* Asegúrate de envolver tu App en Router aquí */}
    <AppProvider>
      <App />
    </AppProvider>
  </Router>
);
