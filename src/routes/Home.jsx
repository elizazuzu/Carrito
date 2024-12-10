import { useAppContext } from '../context/AppContext';
import Card from '../components/Card';
import Form from '../components/Form'; // Importa el formulario

const Home = () => {
  const { state, dispatch } = useAppContext();

  const addToCart = (character) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: character.id,
        name: character.name,
        price: character.price, // Usa el precio único de cada personaje
        image: character.image,
      },
    });
  };

  const addToFavs = (character) => {
    dispatch({ type: 'ADD_TO_FAVS', payload: character });
  };

  return (
    <div>
      <h2>Home - Characters</h2>
      <div className="cards-container">
        {state.characters.map((character) => (
          <div key={character.id} className="character-card">
            <Card character={character} />
            <button onClick={() => addToCart(character)}>Add to Cart</button>
            <button onClick={() => addToFavs(character)}>Add to Favs</button>
          </div>
        ))}
      </div>

      {/* Mostrar el formulario debajo del listado de personajes */}
      <Form />
    </div>
  );
};

export default Home;
