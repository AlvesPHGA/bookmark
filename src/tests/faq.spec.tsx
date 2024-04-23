import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { FrequentlyAskedQuestions } from '../ui/partials/FrequentlyAskedQuestions';

describe('FAQ section', () => {
   it('Should display on device the title', () => {
      render(<FrequentlyAskedQuestions />);

      screen.getByText('Frequently Asked Questions');
   });

   it('Should display on device a small text', () => {
      render(<FrequentlyAskedQuestions />);

      screen.getByText(
         "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.",
      );
   });

   it('Should display some question on device reference faq section', () => {
      render(<FrequentlyAskedQuestions />);

      screen.getByTestId('What is Bookmark?');
      screen.getByTestId('How can I request a new browser?');
      screen.getByTestId('Is there a mobile app?');
      screen.getByTestId('What about other Chromium browsers?');
   });
});
