import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Download } from '../ui/partials/Download';

describe('Download section', () => {
   it('Should show title on section', () => {
      render(<Download />);

      screen.getByText('Download the extension');
   });

   it('Should show small text on section', () => {
      render(<Download />);

      screen.getByText(
         "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.",
      );
   });

   it('Should show three cards on section', () => {
      render(<Download />);

      screen.getByText('Add to Chrome');
      screen.getByText('Add to Firefox');
      screen.getByText('Add to Opera');
   });
});
