import { tv } from 'tailwind-variants';

export const backIllusStyle = tv({
   base: 'absolute',

   variants: {
      typeBack: {
         def: '',
         blue_sbm:
            'right-0 rounded-bl-[184px] w-[795px] h-[426px] bg-color-blue z-0 top-[130px]',
         blue_feat:
            'left-0 rounded-br-[184px] w-[860px] h-[370px] bg-color-blue z-0 bottom-0 z-0',
      },
   },

   defaultVariants: {
      typeBack: 'def',
   },
});
