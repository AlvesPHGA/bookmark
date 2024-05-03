import { Logo } from '../../components/SVGs/Logo';
import { FacebookIcon, TwitterIcon } from '../../components/SVGs/SocialMedia';
import {
   DivComponent,
   NavLinkComponent,
} from '../../components/TagsComponents';

export const Footer = () => {
   return (
      <footer className="bg-veryDarkBlue py-10">
         <DivComponent box="footer_container">
            <DivComponent box="footer_box01">
               <Logo fill="#fff" />
               <DivComponent box="footer_link">
                  <NavLinkComponent>Features</NavLinkComponent>
                  <NavLinkComponent>Pricing</NavLinkComponent>
                  <NavLinkComponent>Contact</NavLinkComponent>
               </DivComponent>
            </DivComponent>
            <DivComponent box="footer_socialMedia">
               <NavLinkComponent>
                  <FacebookIcon />
               </NavLinkComponent>
               <NavLinkComponent>
                  <TwitterIcon />
               </NavLinkComponent>
            </DivComponent>
         </DivComponent>
      </footer>
   );
};
