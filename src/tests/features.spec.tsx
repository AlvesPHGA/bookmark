import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Features } from '../ui/partials/Features';
import userEvent from '@testing-library/user-event';

describe('Feature section', () => {
   it('should show three button on section', async () => {
      render(<Features />);

      screen.getByText('Simple Bookmark');
      screen.getByText('Speedy Searching');
      screen.getByText('Easy Sharing');
   });

   it('should button click show something content tab', async () => {
      render(<Features />);

      const buttonTab = screen.getByText('Easy Sharing');

      screen.getByText('Bookmark in one click');

      await userEvent.click(buttonTab);

      expect(screen.getByText('Share your bookmarks'));
   });
});
