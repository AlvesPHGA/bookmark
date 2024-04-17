import { tv } from 'tailwind-variants';

export const buttonStyle = tv({
   base: 'border-2 border-softRed rounded-md px-7 py-1 text-white bg-softRed hover:text-softRed hover:bg-transparent transition-all',

   variants: {
      types: {
         login: 'uppercase',
      },
   },

   defaultVariants: {
      types: 'login',
   },
});
