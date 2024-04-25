import React from 'react';
import { Button } from '../Form/Button';
import { Input } from '../Form/Input';
import { DivComponent } from '../TagsComponents';

export const ContactFormComponent = () => {
   const [email, setEmail] = React.useState('');

   function handleSubmitContact(ev) {
      const regEmail = /^[a-z0–9._-]+@[a-z0–9.-]+\.[a-z]{2,4}$/;

      ev.preventDefault();

      if (email === '' || email.length < 3) {
         alert('Preencher campo email');
      } else {
         if (!regEmail.test(email)) {
            alert('Email invalido');
         } else {
            alert('Email valido');
         }
      }
   }

   return (
      <form
         onSubmit={handleSubmitContact}
         className="flex w-fit mx-auto space-x-2"
      >
         <DivComponent>
            <Input onChange={(ev) => setEmail(ev.currentTarget.value)} />
         </DivComponent>
         <Button types="btn_contact">Contact Us</Button>
      </form>
   );
};
