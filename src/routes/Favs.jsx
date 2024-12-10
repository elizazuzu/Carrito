// src/components/Favs.jsx
import React from 'react';
import { useAppContext } from '../context/AppContext';

const Favs = () => {
  const { state, dispatch } = useAppContext();
  const { favs } = state;

  // Función para eliminar de favoritos
  const removeFromFavs = (id) => {
    dispatch({
      type: 'REMOVE_FROM_FAVS',
      payload: { id }, // Enviamos el id del favorito a eliminar
    });
  };

  if (favs.length === 0) return <p>No favorites added yet</p>;

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favs.map((fav) => (
          <li key={fav.id} className="favorite-item">
            <img src={fav.image} alt={fav.name} style={{ width: '50px', marginRight: '10px' }} />
            <h3>{fav.name}</h3>
            <button onClick={() => removeFromFavs(fav.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favs;
