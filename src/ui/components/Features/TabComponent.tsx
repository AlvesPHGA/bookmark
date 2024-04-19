import { Button } from '../Form/Button';
import { DivComponent } from '../TagsComponents';
import { ContentTabsComponent } from './ContentTabsComponent';

const legendButton = ['Simple Bookmark', 'Speedy Searching', 'Easy Sharing'];

export const TabComponent = () => {
   return (
      <DivComponent box="tab_component">
         <DivComponent box="tab_buttons">
            {legendButton.map((legend, index) => (
               <Button key={index} types="btn_tab" data-testid={legend}>
                  {legend}
               </Button>
            ))}
         </DivComponent>

         <ContentTabsComponent />
      </DivComponent>
   );
};
