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
         <SectionComponent className="max-w-[1200px] flex items-center mx-auto justify-between">
            <Logo />

            <DivComponent className="flex items-center space-x-10">
               <NavComponent />
               <Button>Login</Button>
            </DivComponent>
         </SectionComponent>
      </header>
   );
};
