import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { NavComponent } from '../ui/components/NavComponent';

describe('Header', () => {
   it('should render links on header on screen', () => {
      const { getByText } = render(<NavComponent />);

      expect(getByText('features')).toBeInTheDocument();
      expect(getByText('pricing')).toBeInTheDocument();
      expect(getByText('contact')).toBeInTheDocument();
   });
});
