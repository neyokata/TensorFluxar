// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TensorFluxar title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TensorFluxar/i);
    expect(titleElement).toBeInTheDocument();
});
