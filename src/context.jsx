
import React, { createContext, useState } from 'react';


const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Ejemplo de estado global

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
