import { Button } from '../../components/Form/Button';
import { NavComponent } from '../../components/NavComponent';
import { Logo } from '../../components/SVGs/Logo';
import {
   DivComponent,
   SectionComponent,
} from '../../components/TagsComponents';

export const Header = () => {
   return (
      <header className="py-10">
         <SectionComponent>
            <Logo fill="#242A45" />

            <DivComponent box="header">
               <NavComponent />
               <Button data-testid="login">Login</Button>
            </DivComponent>
         </SectionComponent>
      </header>
   );
};
