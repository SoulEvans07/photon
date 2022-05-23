import { render, screen } from '@testing-library/react';
import { App } from './App';

class RandomError extends Error {
  name = 'RandomError'
}

describe('App', () => {
  it('has a header', () => {
    render(<App />);
    const heading = screen.getByRole('heading');

    expect(heading).toHaveTextContent('photon');

    expect(() => {
      throw new RandomError('random error message');
    }).toThrowType(RandomError);
  });
});
