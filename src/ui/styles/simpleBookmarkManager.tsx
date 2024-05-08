import { tv } from 'tailwind-variants';

export const simpleBookmarkManager = tv({
   slots: {
      section: 'relative w-full py-10',
      container: 'relative w-[1200px] mx-auto flex items-center h-[500px]',
      content: 'space-y-10 w-[40%] py-10',
      CTAs: 'flex w-fit gap-5',
   },
});
