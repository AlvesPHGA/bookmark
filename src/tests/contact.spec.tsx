import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Contact } from '../ui/partials/Contact';
import userEvent from '@testing-library/user-event';

describe('Contact section', () => {
   it('Should display title on device', () => {
      render(<Contact />);

      screen.getByText("Stay up-to-date with what we're doing");
   });

   it('Should send a email to contact', () => {
      render(<Contact />);

      const buttonContact = screen.getByText('Contact Us');
      const inputContact = screen.getByPlaceholderText('Enter email');

      userEvent.type(inputContact, 'josias@email.com');
      userEvent.click(buttonContact);
   });
});
