import 'text-encoding'; // Polyfill for TextEncoder and TextDecoder
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText((content, element) => {
    return element.tagName.toLowerCase() === 'input' && content.includes('Submit');
  });
  expect(linkElement).toBeInTheDocument();
});
