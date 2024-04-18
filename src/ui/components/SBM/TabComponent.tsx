import { Button } from '../Form/Button';
import { DivComponent } from '../TagsComponents';

export const TabComponent = () => {
   return (
      <DivComponent box="tab_component">
         <DivComponent box="tab_buttons">
            <Button types="btn_tab">Simple Bookmark</Button>
            <Button types="btn_tab">Speedy Searching</Button>
            <Button types="btn_tab">Easy Sharing</Button>
         </DivComponent>

         <DivComponent>
            <DivComponent></DivComponent>
            <DivComponent></DivComponent>
            <DivComponent></DivComponent>
         </DivComponent>
      </DivComponent>
   );
};
