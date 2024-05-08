import { tv } from 'tailwind-variants';

export const headerStyle = tv({
   slots: {
      header: 'py-10',
      headerContainer:
         'max-w-[1200px] flex items-center mx-auto justify-between',
      divNav: 'flex items-center space-x-10',
   },
});
