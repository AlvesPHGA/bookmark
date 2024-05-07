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
               <Logo data-testid="logo_footer" fill="#fff" />
               <DivComponent box="footer_link">
                  <NavLinkComponent link="link_footer">
                     Features
                  </NavLinkComponent>
                  <NavLinkComponent link="link_footer">
                     Pricing
                  </NavLinkComponent>
                  <NavLinkComponent link="link_footer">
                     Contact
                  </NavLinkComponent>
               </DivComponent>
            </DivComponent>
            <DivComponent box="footer_socialMedia">
               <NavLinkComponent link="social_media">
                  <FacebookIcon />
               </NavLinkComponent>
               <NavLinkComponent link="social_media">
                  <TwitterIcon />
               </NavLinkComponent>
            </DivComponent>
         </DivComponent>
      </footer>
   );
};
