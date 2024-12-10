import { render, screen } from '@testing-library/react';
import Card from './Card';  // Asegúrate de que la ruta sea correcta
import '@testing-library/jest-dom';  // Para extender los matchers de jest-dom
import { describe, test, expect } from 'vitest';  // Importar de vitest

describe('Card component', () => {
  test('should render card with name and price', () => {
    const character = {
      id: 1,
      name: 'Rick Sanchez',
      price: 50,
      image: 'rick_image_url',
    };

    render(<Card character={character} />);
    
    // Verificar que el nombre y el precio estén en el documento
    expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
    expect(screen.getByText(/\$50/i)).toBeInTheDocument();
  });
});

