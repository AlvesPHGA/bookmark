import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { FrequentlyAskedQuestions } from '../ui/partials/FrequentlyAskedQuestions';

describe('FAQ section', () => {
   it('Should display on device the title', () => {
      render(<FrequentlyAskedQuestions />);

      screen.getByText('Frequently Asked Questions');
   });
});
