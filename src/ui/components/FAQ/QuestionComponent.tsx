interface QuestionComponentProps {
   asked: string;
   answer: string;
}

export const QuestionComponent = ({
   asked,
   answer,
}: QuestionComponentProps) => {
   return (
      <dl className="space-y-5 border-t-2 border-grayishBlue last:border-b-2 py-5">
         <dt className="text-xl font-medium text-veryDarkBlue">{asked}</dt>
         <dd className="text-grayishBlue">{answer}</dd>
      </dl>
   );
};
