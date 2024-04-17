import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavComponent } from '../ui/components/NavComponent';
import { Header } from '../ui/partials/Global/Header';

describe('Header', () => {
   it('should render links on header on screen', () => {
      const { getByText } = render(<NavComponent />);

      expect(getByText('features')).toBeInTheDocument();
      expect(getByText('pricing')).toBeInTheDocument();
      expect(getByText('contact')).toBeInTheDocument();
   });

   it('should render button on header', async () => {
      const handleClick = jest.fn();
      const { getByTestId } = render(<Header />);

      const addButton = getByTestId('login');

      await userEvent.click(addButton);

      expect(handleClick).toBeTruthy();
   });
});
