import { tv } from 'tailwind-variants';

export const backIllusStyle = tv({
   base: 'absolute',

   variants: {
      typeBack: {
         def: '',
         illustration: `w-[60%] h-[500px] bg-[url('./src/assets/illustration-hero.svg')] bg-no-repeat bg-cover left-[620px] z-10`,
         blue_sbm:
            'right-0 rounded-bl-[184px] w-[795px] h-[426px] bg-color-blue z-0 top-[130px]',
      },
   },

   defaultVariants: {
      typeBack: 'def',
   },
});
