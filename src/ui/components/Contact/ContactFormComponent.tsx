import { Button } from '../Form/Button';
import { Input } from '../Form/Input';
import { DivComponent } from '../TagsComponents';

export const ContactFormComponent = () => {
   return (
      <form className="flex w-fit mx-auto space-x-2">
         <DivComponent>
            <Input />
         </DivComponent>
         <Button>Contact Us</Button>
      </form>
   );
};
