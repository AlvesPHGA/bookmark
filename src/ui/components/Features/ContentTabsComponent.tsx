import { Illustration_tab1 } from '../SVGs/Illustration';
import { DivComponent } from '../TagsComponents';
import { ContentTabComponent } from './ContentTabComponent';

export const ContentTabsComponent = () => {
   return (
      <DivComponent box="tab_contents">
         <Illustration_tab1 />
         <ContentTabComponent />
      </DivComponent>
   );
};
