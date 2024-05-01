import { ContentTabComponentProps } from '../../../data/@types/ITab';
import { DivComponent, NavLinkComponent } from '../TagsComponents';

export const ContentTabComponent = ({
   title,
   text,
}: ContentTabComponentProps) => {
   return (
      <DivComponent box="tab_content">
         <h3 className="text-3xl font-medium">{title}</h3>
         <p>{text}</p>
         <NavLinkComponent link="blue_cta">More Info</NavLinkComponent>
      </DivComponent>
   );
};
