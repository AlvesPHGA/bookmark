import React from 'react';
import { Button } from '../Form/Button';
import { Input } from '../Form/Input';
import { DivComponent } from '../TagsComponents';
import { errorMessage } from '../../styles/tagsStyles';
import { CircleX } from 'lucide-react';
import { formStyle } from '../../styles/formsStyles';

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
            alert('email enviado com sucesso');
            ev.currentTarget.reset();
         }
      }
   }

   return (
      <form onSubmit={handleSubmitContact} className={formStyle()}>
         <DivComponent box="contact_form" errorInput={errorInput && true}>
            <div className=" w-[320px] rounded-md flex items-center justify-between bg-white pr-1">
               <Input
                  onChange={(ev) => setEmail(ev.currentTarget.value)}
                  placeholder="Enter email"
               />
               {errorInput && <CircleX className="stroke-softRed" />}
            </div>
            <span className={errorMessage()}>{errorInput && message}</span>
         </DivComponent>
         <Button types="btn_contact">Contact Us</Button>
      </form>
   );
};
