import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BikeListPage } from './Pages/BikeListPage/BikeListPage';
import { BikeList } from './Components/BikeList/BikeList';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    screen.debug();
  });
  test('displays title', () => {
    render (<App />);

    expect(screen.getByText(/Berlin/)).toBeInTheDocument();
  })
});