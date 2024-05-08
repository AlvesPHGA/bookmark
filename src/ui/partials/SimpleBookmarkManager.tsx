import { BackIllusComponent } from '../components/BackIllusComponent';
import { ContentSBMComponent } from '../components/SBM/ContentSBMComponent';
import { Illustration } from '../components/SVGs/Illustration';

import { simpleBookmarkManager } from '../styles/simpleBookmarkManager';

const { section, container } = simpleBookmarkManager();

export const SimpleBookmarkManager = () => {
   return (
      <section className={section()}>
         <div className={container()}>
            <ContentSBMComponent />
            <Illustration />
         </div>
         <BackIllusComponent typeBack="blue_sbm" />
      </section>
   );
};
