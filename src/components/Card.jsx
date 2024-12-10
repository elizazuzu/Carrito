

import React from 'react'; 
import PropTypes from 'prop-types';  
const Card = ({ character }) => {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p className="price">${character.price}</p>
    </div>
  );
};

// Validación de las props
Card.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
