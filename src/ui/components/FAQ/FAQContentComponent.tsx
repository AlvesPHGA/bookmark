import { faqStyle } from '../../styles/faqStyle';

const { content } = faqStyle();

export const FAQContentComponent = () => {
   return (
      <div className={content()}>
         <h2>Frequently Asked Questions</h2>
         <p>
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
         </p>
      </div>
   );
};
