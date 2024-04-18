import { tv } from 'tailwind-variants';
import backImage from '../../assets/illustration-hero.svg';

export const backIllusStyle = tv({
   base: 'absolute',

   variants: {
      typeBack: {
         def: '',
         illustration: `w-[60%] h-[500px] bg-[url('${backImage}')] bg-no-repeat bg-cover left-[620px] z-10`,
         blue_sbm:
            'right-0 rounded-bl-[184px] w-[795px] h-[426px] bg-[#5368DF] z-0 top-[130px]',
      },
   },

   defaultVariants: {
      typeBack: 'def',
   },
});
