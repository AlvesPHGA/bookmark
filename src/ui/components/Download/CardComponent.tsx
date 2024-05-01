import { CardProps } from '../../../data/@types/ICard';
import { imgStyle } from '../../styles/tagsStyles';
import {
   DivComponent,
   ImageComponent,
   NavLinkComponent,
} from '../TagsComponents';

const { browsers, dots } = imgStyle();

export const CardComponent = ({ src, alt, title, span }: CardProps) => {
   return (
      <DivComponent box="card">
         <DivComponent box="card_box01">
            <ImageComponent className={browsers()} src={src} alt={alt} />
            <h3 className="text-xl font-medium">{title}</h3>
            <span className="text-sm text-grayishBlue">{span}</span>
         </DivComponent>
         <DivComponent box="card_box02">
            <ImageComponent className={dots()} src="./bg-dots.svg" />
            <NavLinkComponent link="blue_cta">
               Add & Install Extension
            </NavLinkComponent>
         </DivComponent>
      </DivComponent>
   );
};
