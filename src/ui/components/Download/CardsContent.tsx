import { CardComponent } from './CardComponent';

import { downloadStyle } from '../../styles/downloadStyle';

const { cards } = downloadStyle();

const cardContent = [
   {
      src: './logo-chrome.svg',
      alt: 'image Chrome',
      title: 'Add to Chrome',
      span: 'Minimum version 62',
   },
   {
      src: './logo-firefox.svg',
      alt: 'image Firefox',
      title: 'Add to Firefox',
      span: 'Minimum version 55',
   },
   {
      src: './logo-opera.svg',
      alt: 'image Opera',
      title: 'Add to Opera',
      span: 'Minimum version 46',
   },
];

export const CardsContent = () => {
   return (
      <div className={cards()}>
         {cardContent.map((content, index) => (
            <CardComponent
               key={index}
               src={content.src}
               alt={content.alt}
               title={content.title}
               span={content.span}
            />
         ))}
      </div>
   );
};
