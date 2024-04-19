import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Features } from '../ui/partials/Features';

describe('Feature section', () => {
   it('should show three button on section', () => {
      const { getByText } = render(<Features />);

      expect(getByText('Simple Bookmark')).toBeInTheDocument();
      expect(getByText('Speedy Searching')).toBeInTheDocument();
      expect(getByText('Easy Sharing')).toBeInTheDocument();
   });
});
