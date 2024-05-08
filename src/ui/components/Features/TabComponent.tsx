import React from 'react';
import { Button } from '../Form/Button';
import { ContentTabsComponent } from './ContentTabsComponent';

const legendButton = ['Simple Bookmark', 'Speedy Searching', 'Easy Sharing'];

import { featuresStyle } from '../../styles/featuresStyle';

const { tab_component, tab_buttons } = featuresStyle();

export const TabComponent = () => {
   const [activeTab, setActiveTab] = React.useState(0);
   const [contentTab, setContentTab] = React.useState(0);

   function handleTab(index: number) {
      setActiveTab(index);
      setContentTab(index);
   }

   return (
      <div className={tab_component()}>
         <div className={tab_buttons()}>
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
         </div>

         <ContentTabsComponent value={contentTab} />
      </div>
   );
};
