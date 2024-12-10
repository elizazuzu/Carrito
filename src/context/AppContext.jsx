import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

const initialState = {
  cart: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  theme: 'light',
  characters: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
    case 'ADD_TO_FAVS':
      const newFavs = [...state.favs, action.payload];
      localStorage.setItem('favs', JSON.stringify(newFavs));
      return { ...state, favs: newFavs };
    case 'REMOVE_FROM_FAVS':
      const updatedFavs = state.favs.filter(fav => fav.id !== action.payload.id);
      localStorage.setItem('favs', JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_CHARACTERS':
      return { ...state, characters: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Obtener los personajes de la API y asignar un precio único a cada uno
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        const charactersWithPrices = data.results.map(character => ({
          ...character,
          price: Math.floor(Math.random() * 100) + 10, // Asigna un precio aleatorio
        }));
        dispatch({ type: 'SET_CHARACTERS', payload: charactersWithPrices });
      })
      .catch((error) => console.error('Error fetching characters:', error));
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
