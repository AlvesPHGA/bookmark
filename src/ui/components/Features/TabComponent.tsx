import React from 'react';
import { Button } from '../Form/Button';
import { DivComponent } from '../TagsComponents';
import { ContentTabsComponent } from './ContentTabsComponent';

const legendButton = ['Simple Bookmark', 'Speedy Searching', 'Easy Sharing'];

export const TabComponent = () => {
   const [activeTab, setActiveTab] = React.useState(0);

   function handleTab(index: number) {
      setActiveTab(index);
   }

   console.log(activeTab);

   return (
      <DivComponent box="tab_component">
         <DivComponent box="tab_buttons">
            {legendButton.map((legend, index) => (
               <Button
                  key={index}
                  types="btn_tab"
                  isActiveTab={index === activeTab}
                  data-testid={legend}
                  onClick={() => handleTab(index)}
               >
                  {legend}
               </Button>
            ))}
         </DivComponent>

         <ContentTabsComponent />
      </DivComponent>
   );
};
