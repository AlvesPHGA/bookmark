import { BackIllusComponent } from '../components/BackIllusComponent';
import { ContentSBMComponent } from '../components/SBM/ContentSBMComponent';
import {
   DivComponent,
   ImageComponent,
   SectionComponent,
} from '../components/TagsComponents';

export const SimpleBookmarkManager = () => {
   return (
      <SectionComponent section="sbm">
         <DivComponent box="sbm">
            <ContentSBMComponent />
            <ImageComponent
               src="./src/assets/illustration-hero.svg"
               alt="Image illustration"
               data-testid="illustration"
            />
         </DivComponent>
         <BackIllusComponent typeBack="blue_sbm" />
      </SectionComponent>
   );
};
