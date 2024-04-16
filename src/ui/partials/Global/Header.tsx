import { Button } from '../../components/Form/Button';
import { NavComponent } from '../../components/NavComponent';
import { Logo } from '../../components/SVGs/Logo';
import {
   DivComponent,
   SectionComponent,
} from '../../components/TagsComponents';

export const Header = () => {
   return (
      <header>
         <SectionComponent>
            <Logo />

            <DivComponent>
               <NavComponent />
               <Button>Login</Button>
            </DivComponent>
         </SectionComponent>
      </header>
   );
};
