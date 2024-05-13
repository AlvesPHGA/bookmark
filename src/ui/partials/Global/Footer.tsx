import { Logo } from '../../components/SVGs/Logo';
import { FacebookIcon, TwitterIcon } from '../../components/SVGs/SocialMedia';
import { NavLinkComponent } from '../../components/TagsComponents';

import { footerStyle } from '../../styles/footerStyle';
const { footer, container, box, link_nav, box_social_media } = footerStyle();

export const Footer = () => {
   return (
      <footer className={footer()}>
         <div className={container()}>
            <div className={box()}>
               <Logo data-testid="logo_footer" fill="#fff" />
               <div className={link_nav()}>
                  <NavLinkComponent link="link_footer">
                     Features
                  </NavLinkComponent>
                  <NavLinkComponent link="link_footer">
                     Pricing
                  </NavLinkComponent>
                  <NavLinkComponent link="link_footer">
                     Contact
                  </NavLinkComponent>
               </div>
            </div>

            <div className={box_social_media()}>
               <NavLinkComponent link="social_media">
                  <FacebookIcon />
               </NavLinkComponent>
               <NavLinkComponent link="social_media">
                  <TwitterIcon />
               </NavLinkComponent>
            </div>
         </div>
      </footer>
   );
};
