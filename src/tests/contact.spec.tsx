import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Contact } from '../ui/partials/Contact';

describe('Contact section', () => {
   it('Should display title on device', () => {
      render(<Contact />);

      screen.getByText("Stay up-to-date with what we're doing");
   });
});
