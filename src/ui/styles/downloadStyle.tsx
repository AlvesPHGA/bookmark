import { tv } from 'tailwind-variants';

export const downloadStyle = tv({
   slots: {
      section: 'relative py-24 space-y-20',
      content: 'w-[1200px] mx-auto space-y-5 w-[30%] text-center',
      cards: 'relative w-[1200px] mx-auto flex items-center justify-between py-16',
   },
});
