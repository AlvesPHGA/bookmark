import React from 'react';
import { faqStyle } from '../../styles/tagsStyles';

interface QuestionComponentProps {
   asked: string;
   answer: string;
}

const { dt, dd } = faqStyle({ answer: 'hidden' });

export const QuestionComponent = ({
   asked,
   answer,
}: QuestionComponentProps) => {
   const [activeFAQ, setActiveFAQ] = React.useState(false);

   function handleClickFAQ() {
      setActiveFAQ(!activeFAQ);
   }

   return (
      <div className="border-b-2 border-grayishBlue pb-5 space-y-3 last:pb-0 last:border-0">
         <dt role="button" onClick={handleClickFAQ} className={dt()}>
            {asked}
         </dt>
         <dd className={dd({ activeFAQ })}>{answer}</dd>
      </div>
   );
};
