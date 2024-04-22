interface QuestionComponentProps {
   asked: string;
   answer: string;
}

export const QuestionComponent = ({
   asked,
   answer,
}: QuestionComponentProps) => {
   return (
      <dl>
         <dt>{asked}</dt>
         <dd>{answer}</dd>
      </dl>
   );
};
