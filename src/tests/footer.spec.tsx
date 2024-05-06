import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from '../ui/partials/Global/Footer';

describe('Footer', () => {
   it('Should display links of footer on screen', () => {
      render(<Footer />);
      screen.getByText('Features');
      screen.getByText('Pricing');
      screen.getByText('Contact');
   });
});
