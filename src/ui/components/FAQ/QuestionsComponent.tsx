import { faqStyle } from '../../styles/tagsStyles';
import { DivComponent } from '../TagsComponents';
import { QuestionComponent } from './QuestionComponent';

const FAQContent = [
   {
      asked: 'What is Bookmark?',
      answer:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam tenetur voluptates! Labore reiciendis natus hic qui deserunt delectus tempore!',
   },
   {
      asked: 'How can I request a new browser?',
      answer:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam tenetur voluptates! Labore reiciendis natus hic qui deserunt delectus tempore!',
   },
   {
      asked: 'Is there a mobile app?',
      answer:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam tenetur voluptates! Labore reiciendis natus hic qui deserunt delectus tempore!',
   },
   {
      asked: 'What about other Chromium browsers?',
      answer:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam tenetur voluptates! Labore reiciendis natus hic qui deserunt delectus tempore!',
   },
];

const { dl } = faqStyle();

export const QuestionsComponent = () => {
   return (
      <DivComponent box="faq_questions">
         <dl className={dl()}>
            {FAQContent.map((faq, index) => (
               <QuestionComponent
                  key={index}
                  asked={faq.asked}
                  answer={faq.answer}
               />
            ))}
         </dl>
      </DivComponent>
   );
};
