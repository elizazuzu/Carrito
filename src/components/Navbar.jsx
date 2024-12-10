
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaHeart, FaPlus } from 'react-icons/fa'; // Importando íconos de Font Awesome

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" style={{ fontSize: '2rem' }}>
            <FaHome style={{ marginRight: '8px' }} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/favs" style={{ fontSize: '2rem' }}>
            <FaHeart style={{ marginRight: '8px' }} />
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/cart" style={{ fontSize: '2rem' }}>
            <FaShoppingCart style={{ marginRight: '8px' }} />
            Carrito
          </Link>
        </li>
        <li>
          <Link to="/form" style={{ fontSize: '2rem' }}>
            <FaPlus style={{ marginRight: '8px' }} />
            Formulario
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
