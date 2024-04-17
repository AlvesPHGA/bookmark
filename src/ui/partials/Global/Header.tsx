import React from 'react';
import { Button } from '../../components/Form/Button';
import { NavComponent } from '../../components/NavComponent';
import { Logo } from '../../components/SVGs/Logo';
import {
   DivComponent,
   SectionComponent,
} from '../../components/TagsComponents';

export const Header = () => {
   const [active, setActive] = React.useState(false);

   function handleClick() {
      setActive(!active);
   }

   console.log(active);

   return (
      <header className="py-10">
         <SectionComponent>
            <Logo />

            <DivComponent box="header">
               <NavComponent />
               <Button data-testid="login" onClick={handleClick}>
                  Login
               </Button>
            </DivComponent>
         </SectionComponent>
      </header>
   );
};
