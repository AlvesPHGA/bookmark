import { NavLinkComponent } from '../TagsComponents';

import { simpleBookmarkManager } from '../../styles/simpleBookmarkManager';

const { content, CTAs } = simpleBookmarkManager();

export const ContentSBMComponent = () => {
   return (
      <div className={content()}>
         <h1>A Simple Bookmark Manager</h1>
         <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
         </p>
         <div className={CTAs()}>
            <NavLinkComponent link="blue_cta">
               Get it on Chrome
            </NavLinkComponent>
            <NavLinkComponent link="white_cta">
               Get it on Firefox
            </NavLinkComponent>
         </div>
      </div>
   );
};
