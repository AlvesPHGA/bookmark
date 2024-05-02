import { Logo } from '../../components/SVGs/Logo';
import {
   DivComponent,
   NavLinkComponent,
} from '../../components/TagsComponents';

export const Footer = () => {
   return (
      <footer className="bg-veryDarkBlue py-10">
         <DivComponent box="footer_container">
            <DivComponent>
               <Logo />
               <DivComponent>
                  <NavLinkComponent>Features</NavLinkComponent>
                  <NavLinkComponent>Pricing</NavLinkComponent>
                  <NavLinkComponent>Contact</NavLinkComponent>
               </DivComponent>
            </DivComponent>
            <DivComponent>
               <NavLinkComponent></NavLinkComponent>
               <NavLinkComponent></NavLinkComponent>
               <NavLinkComponent></NavLinkComponent>
            </DivComponent>
         </DivComponent>
      </footer>
   );
};
