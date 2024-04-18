import { Button } from '../Form/Button';
import { DivComponent } from '../TagsComponents';

export const TabComponent = () => {
   return (
      <DivComponent>
         <DivComponent>
            <Button>Simple Bookmark</Button>
            <Button>Speedy Searching</Button>
            <Button>Easy Sharing</Button>
         </DivComponent>

         <DivComponent>
            <DivComponent></DivComponent>
            <DivComponent></DivComponent>
            <DivComponent></DivComponent>
         </DivComponent>
      </DivComponent>
   );
};
