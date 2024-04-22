import { FAQContentComponent } from '../components/FAQ/FAQContentComponent';
import { QuestionsComponent } from '../components/FAQ/QuestionsComponent';
import { SectionComponent } from '../components/TagsComponents';

export const FrequentlyAskedQuestions = () => {
   return (
      <SectionComponent section="faq">
         <FAQContentComponent />
         <QuestionsComponent />
      </SectionComponent>
   );
};
