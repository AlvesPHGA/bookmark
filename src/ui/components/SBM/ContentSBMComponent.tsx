import { DivComponent, NavLinkComponent } from '../TagsComponents';

export const ContentSBMComponent = () => {
   return (
      <DivComponent box="sbm_content">
         <h1>A Simple Bookmark Manager</h1>
         <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
         </p>
         <DivComponent box="cta">
            <NavLinkComponent link="blue_cta">
               Get it on Chrome
            </NavLinkComponent>
            <NavLinkComponent link="white_cta">
               Get it on Firefox
            </NavLinkComponent>
         </DivComponent>
      </DivComponent>
   );
};
