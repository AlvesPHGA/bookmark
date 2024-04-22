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
         header: 'flex items-center space-x-10',
         // Simple bookmark manager
         sbm: 'w-[1200px] mx-auto flex items-center h-[500px]',
         sbm_content: 'space-y-10 w-[40%] py-10',
         cta: 'space-x-10 flex',
         // Features
         feature_content: 'w-[1200px] mx-auto space-y-5',
         tab_component: 'w-[1200px] mx-auto space-y-16',
         tab_buttons: 'mx-auto',
         tab_contents:
            'hidden w-full h-fit  items-center justify-between pr-14 z-10',
         tab_content: 'relative space-y-7 text-left w-[420px]',
         // Download
         down_content: 'w-[1200px] mx-auto space-y-5 w-[30%] text-center',
         down_cards:
            'w-[1200px] mx-auto flex items-center justify-between py-16',
         // Card
         card: 'w-[360px] flex flex-col items-center h-fit pt-16 rounded-lg shadow-2xl shadow-grayishBlue mx-auto first:absolute first:top-0 last:absolute last:bottom-0 last:right-0',
         card_box01: 'w-fit mx-auto text-center space-y-6 mb-10',
         card_box02: 'py-8 w-full',
         // FAQ
         faq_content: 'w-[25%] text-center mx-auto space-y-6',
         faq_questions: 'w-[30%] mx-auto ',
      },

      isContentTab: {
         true: 'flex',
      },
   },

   defaultVariants: {
      box: 'def',
      isContentTab: false,
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
         'absolute w-[60%] h-[512px] object-contain left-[590px] z-10 top-0',
      illustration_tab: 'rounded-md w-[55%]  h-[450px]',
   },
});

export const imgStyle = tv({
   slots: {
      browsers: 'mx-auto',
      dots: 'absolute top-0 w-full bg-[100%]',
   },
});
