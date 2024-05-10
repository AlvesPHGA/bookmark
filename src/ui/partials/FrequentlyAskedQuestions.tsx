import { FAQContentComponent } from '../components/FAQ/FAQContentComponent';
import { QuestionsComponent } from '../components/FAQ/QuestionsComponent';

import { faqStyle } from '../styles/faqStyle';

const { section } = faqStyle();

export const FrequentlyAskedQuestions = () => {
   return (
      <section className={section()}>
         <FAQContentComponent />
         <QuestionsComponent />
      </section>
   );
};
