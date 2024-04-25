import React from 'react';
import { Button } from '../Form/Button';
import { Input } from '../Form/Input';
import { DivComponent } from '../TagsComponents';

export const ContactFormComponent = () => {
   const [name, setName] = React.useState('');

   function handleChange(ev) {
      console.log(ev.target.value);
   }

   return (
      <form className="flex w-fit mx-auto space-x-2">
         <DivComponent>
            <Input onChange={handleChange} />
         </DivComponent>
         <Button types="btn_contact">Contact Us</Button>
      </form>
   );
};
