import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { FrequentlyAskedQuestions } from '../ui/partials/FrequentlyAskedQuestions';
import userEvent from '@testing-library/user-event';

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

      screen.getByText('What is Bookmark?');
      screen.getByText('How can I request a new browser?');
      screen.getByText('Is there a mobile app?');
      screen.getByText('What about other Chromium browsers?');
   });

   it('Should click action to asked, where click action should device answer to user', async () => {
      render(<FrequentlyAskedQuestions />);

      const askedButton = screen.getByText('What is Bookmark?');

      await userEvent.click(askedButton);

      expect(askedButton).toBeTruthy();
   });
});
