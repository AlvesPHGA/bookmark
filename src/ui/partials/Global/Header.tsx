import { Button } from '../../components/Form/Button';
import { NavComponent } from '../../components/NavComponent';
import { Logo } from '../../components/SVGs/Logo';
import {
   DivComponent,
   SectionComponent,
} from '../../components/TagsComponents';

export const Header = () => {
   function handleClick() {
      alert('login');
   }

   return (
      <header className="py-10">
         <SectionComponent>
            <Logo />

            <DivComponent box="header">
               <NavComponent />
               <Button onClick={handleClick}>Login</Button>
            </DivComponent>
         </SectionComponent>
      </header>
   );
};
