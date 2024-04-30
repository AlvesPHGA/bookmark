import React from 'react';
import { Button } from '../Form/Button';
import { Input } from '../Form/Input';
import { DivComponent } from '../TagsComponents';
import { errorMessage } from '../../styles/tagsStyles';

export const ContactFormComponent = () => {
   const [email, setEmail] = React.useState('');
   const [errorInput, setErrorInput] = React.useState(false);
   const [message, setMessage] = React.useState('');

   function handleSubmitContact(ev: React.FormEvent<HTMLFormElement>) {
      const regEmail = /^[a-z0–9._-]+@[a-z0–9.-]+\.[a-z]{2,4}$/;

      ev.preventDefault();

      if (email === '' || email.length < 3) {
         setErrorInput(true);
         setMessage('Preencher corretamente o campo');
      } else {
         setErrorInput(false);
         if (!regEmail.test(email)) {
            setErrorInput(true);
            setMessage('Email invalido');
         } else {
            setErrorInput(false);
         }
      }
   }

   return (
      <form
         onSubmit={handleSubmitContact}
         className="flex items-baseline w-fit mx-auto space-x-2"
      >
         <DivComponent box="contact_form" errorInput={errorInput && true}>
            <Input onChange={(ev) => setEmail(ev.currentTarget.value)} />
            <span className={errorMessage()}>{errorInput && message}</span>
         </DivComponent>
         <Button types="btn_contact">Contact Us</Button>
      </form>
   );
};
