import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { SimpleBookmarkManager } from '../ui/partials/SimpleBookmarkManager';

describe('SimpleBookmarkManager section', () => {
   it('Should show title on section', () => {
      const { getByText } = render(<SimpleBookmarkManager />);

      expect(getByText('A Simple Bookmark Manager')).toBeInTheDocument();
   });

   it('Should show text on section', () => {
      const { getByText } = render(<SimpleBookmarkManager />);

      expect(
         getByText(
            'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.',
         ),
      ).toBeInTheDocument();
   });

   it('Should show two ctas on section', () => {
      const { getByText } = render(<SimpleBookmarkManager />);

      expect(getByText('Get it on Chrome')).toBeInTheDocument();
      expect(getByText('Get it on Firefox')).toBeInTheDocument();
   });

   it('Should show illustration on section', () => {
      const { getByTestId } = render(<SimpleBookmarkManager />);

      expect(getByTestId('illustration')).toBeInTheDocument();
   });
});
