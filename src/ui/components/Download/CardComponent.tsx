import { CardProps } from '../../../data/@types/ICard';
import { imgStyle } from '../../styles/tagsStyles';
import { cardStyle } from '../../styles/cardStyle';

import { ImageComponent, NavLinkComponent } from '../TagsComponents';

const { browsers, dots } = imgStyle();
const { card, card_box_01, card_box_02 } = cardStyle();

export const CardComponent = ({ src, alt, title, span }: CardProps) => {
   return (
      <div className={card()}>
         <div className={card_box_01()}>
            <ImageComponent className={browsers()} src={src} alt={alt} />
            <h3 className="text-xl font-medium">{title}</h3>
            <span className="text-sm text-grayishBlue">{span}</span>
         </div>
         <div className={card_box_02()}>
            <ImageComponent className={dots()} src="./bg-dots.svg" />
            <NavLinkComponent link="blue_cta">
               Add & Install Extension
            </NavLinkComponent>
         </div>
      </div>
   );
};
