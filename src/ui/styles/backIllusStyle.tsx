import { tv } from 'tailwind-variants';
import backImage from '../../assets/illustration-hero.svg';

export const backIllusStyle = tv({
   base: 'absolute',

   variants: {
      typeBack: {
         def: '',
         illustration: `w-[60%] h-[500px] bg-[url('${backImage}')] bg-no-repeat bg-cover left-[620px]`,
      },
   },

   defaultVariants: {
      typeBack: 'def',
   },
});
