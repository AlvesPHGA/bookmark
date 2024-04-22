import { CardComponent } from './CardComponent';

const cardContent = [
   {
      src: '',
      alt: 'image Chrome',
      title: 'Add to Chrome',
      span: 'Minimum version 62',
   },
   {
      src: '',
      alt: 'image Firefox',
      title: 'Add to Firefox',
      span: 'Minimum version 55',
   },
   {
      src: '',
      alt: 'image Opera',
      title: 'Add to Opera',
      span: 'Minimum version 46',
   },
];

export const CardsContent = () => {
   return (
      <>
         {cardContent.map((content, index) => (
            <CardComponent
               key={index}
               src={content.src}
               alt={content.alt}
               title={content.title}
               span={content.span}
            />
         ))}
      </>
   );
};
