import { Button } from '../Form/Button';
import { Input } from '../Form/Input';
import { DivComponent } from '../TagsComponents';

export const ContactFormComponent = () => {
   return (
      <form className="flex w-fit mx-auto border">
         <DivComponent>
            <Input />
         </DivComponent>
         <Button>Contact Us</Button>
      </form>
   );
};
