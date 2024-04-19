import { DivComponent, NavLinkComponent } from '../TagsComponents';

export const ContentTabComponent = ({
   title,
   text,
}: {
   title: string;
   text: string;
}) => {
   return (
      <DivComponent box="tab_content">
         <h3 className="text-3xl font-medium">{title}</h3>
         <p>{text}</p>
         <NavLinkComponent link="blue_cta">More Info</NavLinkComponent>
      </DivComponent>
   );
};
