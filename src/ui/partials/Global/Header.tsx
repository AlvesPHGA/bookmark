import { Button } from '../../components/Form/Button';
import { NavComponent } from '../../components/NavComponent';
import { Logo } from '../../components/SVGs/Logo';

import { headerStyle } from '../../styles/headerStyle';

const { header, headerContainer, divNav } = headerStyle();

export const Header = () => {
   return (
      <header className={header()}>
         <div className={headerContainer()}>
            <Logo fill="#242A45" />

            <div className={divNav()}>
               <NavComponent />
               <Button data-testid="login">Login</Button>
            </div>
         </div>
      </header>
   );
};
