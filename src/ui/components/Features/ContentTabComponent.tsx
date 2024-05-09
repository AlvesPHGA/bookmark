import { ContentTabComponentProps } from '../../../data/@types/ITab';
import { NavLinkComponent } from '../TagsComponents';

import { featuresStyle } from '../../styles/featuresStyle';

const { tab_content, cta } = featuresStyle();

export const ContentTabComponent = ({
   title,
   text,
}: ContentTabComponentProps) => {
   return (
      <div className={tab_content()}>
         <h3 className="text-3xl font-medium">{title}</h3>
         <p>{text}</p>
         <NavLinkComponent className={cta()}>More Info</NavLinkComponent>
      </div>
   );
};
