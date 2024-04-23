import React from 'react';
import { faqStyle } from '../../styles/tagsStyles';
import { ChevronUp } from 'lucide-react';

interface QuestionComponentProps {
   asked: string;
   answer: string;
}

const { dt, dd, svg } = faqStyle({ answer: 'hidden' });

export const QuestionComponent = ({
   asked,
   answer,
}: QuestionComponentProps) => {
   const [activeFAQ, setActiveFAQ] = React.useState(false);

   function handleClickFAQ() {
      setActiveFAQ(!activeFAQ);
   }

   return (
      <div
         data-testid={asked}
         className="border-b-2 border-grayishBlue pb-5 space-y-3 last:pb-0 last:border-0"
      >
         <dt role="button" onClick={handleClickFAQ} className={dt()}>
            {asked} <ChevronUp className={svg({ activeFAQ })} />
         </dt>
         <dd data-testid={asked} className={dd({ activeFAQ })}>
            {answer}
         </dd>
      </div>
   );
};
