import { tv } from 'tailwind-variants';

export const buttonStyle = tv({
   base: 'border-2 border-softRed rounded-md px-7 py-1 text-white bg-softRed hover:text-softRed hover:bg-transparent transition-all',

   variants: {
      types: {
         login: 'uppercase',
         btn_tab:
            'rounded-none bg-transparent text-grayishBlue font-medium border-0 px-8 border-b-2 border-[#f7f7f7]  pb-4',
      },
   },

   defaultVariants: {
      types: 'login',
   },
});
