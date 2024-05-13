import { tv } from 'tailwind-variants';

export const footerStyle = tv({
   slots: {
      footer: 'bg-veryDarkBlue py-10',
      container: 'w-[1200px] mx-auto flex items-center justify-between',
      box: 'flex items-center gap-16',
      link_nav: 'space-x-10 uppercase',
      box_social_media: 'flex gap-10 items-center',
   },
});
