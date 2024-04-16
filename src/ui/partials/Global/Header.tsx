import { NavComponent } from '../../components/NavComponent';
import { Logo } from '../../components/SVGs/Logo';
import { SectionComponent } from '../../components/TagsComponents';

export const Header = () => {
   return (
      <header>
         <SectionComponent>
            <Logo />
            <NavComponent />
         </SectionComponent>
      </header>
   );
};
