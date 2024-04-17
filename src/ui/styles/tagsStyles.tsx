import { tv } from 'tailwind-variants';

export const sectionStyle = tv({
   base: 'flex items-center mx-auto justify-between',

   variants: {
      section: {
         def: 'max-w-[1200px] flex items-center mx-auto justify-between',
         sbm: 'w-full py-10 border',
      },
   },

   defaultVariants: {
      section: 'def',
   },
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

export const navLinkStyle = tv({
   base: 'text-xl uppercase font-normal text-veryDarkBlue hover:text-softRed transform-all',
});
