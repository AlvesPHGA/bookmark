import { tv } from 'tailwind-variants';

export const featuresStyle = tv({
   slots: {
      section: 'relative py-20 text-center space-y-16',
      content: 'w-[1200px] mx-auto space-y-5',
      tab_component: 'w-[1200px] mx-auto space-y-16',
      tab_buttons: 'mx-auto',
      tab_contents:
         'hidden w-full h-fit  items-center justify-between pr-14 z-10',
      tab_content: 'relative space-y-7 text-left w-[420px]',
   },

   variants: {
      isContentTab: {
         true: 'flex',
      },
   },

   defaultVariants: {
      isContentTab: false,
   },
});
