import { DivComponent } from '../TagsComponents';
import { QuestionComponent } from './QuestionComponent';

const FAQContent = [
   {
      id: '01',
      asked: 'What is Bookman?',
      answer:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam tenetur voluptates! Labore reiciendis natus hic qui deserunt delectus tempore!',
   },
   {
      id: '02',
      asked: 'How can I request a new browser?',
      answer:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam tenetur voluptates! Labore reiciendis natus hic qui deserunt delectus tempore!',
   },
   {
      id: '03',
      asked: 'Is there a mobile app?',
      answer:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam tenetur voluptates! Labore reiciendis natus hic qui deserunt delectus tempore!',
   },
   {
      id: '02',
      asked: 'What about other Chromium browsers?',
      answer:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam tenetur voluptates! Labore reiciendis natus hic qui deserunt delectus tempore!',
   },
];

export const QuestionsComponent = () => {
   return (
      <DivComponent box="faq_questions">
         {FAQContent.map(({ id, asked, answer }) => (
            <QuestionComponent key={id} asked={asked} answer={answer} />
         ))}
      </DivComponent>
   );
};
