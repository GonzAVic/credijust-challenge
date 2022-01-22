import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Test...
 *  C O M I N G   S O O N
 */

test('Renders lofin form', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
