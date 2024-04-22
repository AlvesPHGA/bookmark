import React from 'react';
import { faqStyle } from '../../styles/tagsStyles';

interface QuestionComponentProps {
   asked: string;
   answer: string;
}

const { dl, dt, dd } = faqStyle({ answer: 'hidden' });

export const QuestionComponent = ({
   asked,
   answer,
}: QuestionComponentProps) => {
   const [activeFAQ, setActiveFAQ] = React.useState(false);

   function handleClickFAQ() {
      setActiveFAQ(!activeFAQ);
   }

   return (
      <dl className={dl()}>
         <dt role="button" onClick={handleClickFAQ} className={dt()}>
            {asked}
         </dt>
         <dd className={dd({ activeFAQ })}>{answer}</dd>
      </dl>
   );
};
