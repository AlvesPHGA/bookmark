import { tv } from 'tailwind-variants';

export const cardStyle = tv({
   slots: {
      card: 'w-[360px] flex flex-col items-center h-fit pt-16 rounded-lg shadow-2xl shadow-grayishBlue mx-auto first:absolute first:top-0 last:absolute last:bottom-0 last:right-0',
      card_box_01: 'w-fit mx-auto text-center space-y-6 mb-10',
      card_box_02: 'relative py-8 w-full',
   },
});
