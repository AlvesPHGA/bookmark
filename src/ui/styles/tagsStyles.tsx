import { tv } from 'tailwind-variants';

export const sectionStyle = tv({
   base: 'relative',

   variants: {
      section: {
         def: 'max-w-[1200px] flex items-center mx-auto justify-between',
         sbm: 'w-full py-10',
         features: 'py-20 text-center space-y-16',
         download: 'py-24 space-y-20',
         faq: 'py-24 space-y-20 border',
         contact: 'py-24 bg-[#5267DF] space-y-16',
      },
   },

   defaultVariants: {
      section: 'def',
   },
});

export const divStyle = tv({
   base: 'relative',

   variants: {
      box: {
         def: 'flex items-center',
         // Features
         tab_contents:
            'hidden w-full h-fit  items-center justify-between pr-14 z-10',
         tab_content: 'relative space-y-7 text-left w-[420px]',

         // Contact
         contact_form:
            'flex flex-col border border-2 border-transparent h-[72px] rounded-lg',
      },

      isContentTab: {
         true: 'flex',
      },

      errorInput: {
         true: 'border-red-500 bg-softRed',
      },
   },

   defaultVariants: {
      box: 'def',
      isContentTab: false,
      errorInput: false,
   },
});

export const navLinkStyle = tv({
   base: 'font-normal transition',

   variants: {
      link: {
         def: 'text-white',
         header: 'text-xl uppercase text-veryDarkBlue hover:text-softRed',
         blue_cta:
            'bg-[#5267DF] py-2.5 px-6 rounded text-white font-medium border-2 border-[#5267DF] hover:text-[#5267DF] hover:bg-transparent block w-fit',
         white_cta:
            'bg-[#F7F7F7] py-2.5 px-6 rounded text-grayishBlue font-medium border-2 border-[#F7F7F7] hover:border-[#f7f7f7] hover:bg-transparent',
         link_footer: 'text-white hover:text-softRed',
         social_media: 'hover:scale-125',
      },

      card: {
         def: 'mx-auto',
      },
   },

   defaultVariants: {
      link: 'def',
      card: 'def',
   },
});

export const svgStyle = tv({
   slots: {
      illustration:
         'absolute w-[60%] h-[512px] object-contain left-[590px] z-10 top-0 ',
      illustration_tab: 'rounded-md w-[55%]  h-[450px]',
   },
});

export const imgStyle = tv({
   slots: {
      browsers: 'mx-auto',
      dots: 'absolute top-0 w-full bg-[100%]',
   },
});

export const faqStyle = tv({
   slots: {
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

export const errorMessage = tv({
   base: 'text-sm text-white text-base pl-1',
});
