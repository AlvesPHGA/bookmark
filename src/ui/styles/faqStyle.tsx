import { tv } from 'tailwind-variants';

export const faqStyle = tv({
   slots: {
      section: 'py-24 space-y-20',
      content: 'w-[25%] text-center mx-auto space-y-6',
      questions: 'w-[30%] mx-auto',

      dl: 'space-y-5 border-t-2 border-grayishBlue border-b-2 py-5 mb-16',
      dt: 'relative flex items-center justify-between px-1 text-xl font-medium text-veryDarkBlue hover:text-softRed transition-all z-10',
      svg: 'hover:stroke-softRed',
      dd: 'text-grayishBlue',
   },

   variants: {
      answer: {
         hidden: {
            dd: 'opacity-0 absolute z-0',
            svg: 'initial',
         },
      },

      activeFAQ: {
         true: {
            dd: 'static opacity-1 transition delay-[.02] animate-openAsked',
            svg: 'rotate-180 stroke-softRed',
         },
      },
   },
});
