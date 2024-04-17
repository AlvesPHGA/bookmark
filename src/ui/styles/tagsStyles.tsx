import { tv } from 'tailwind-variants';

export const sectionStyle = tv({
   base: 'max-w-[1200px] flex items-center mx-auto justify-between',
});

export const divStyle = tv({
   base: '',

   variants: {
      box: {
         def: 'flex items-center',
         header: 'flex items-center space-x-10',
      },
   },

   defaultVariants: {
      box: 'def',
   },
});