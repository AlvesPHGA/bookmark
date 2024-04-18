import { BackIllusComponent } from '../components/BackIllusComponent';
import { ContentSBMComponent } from '../components/SBM/ContentSBMComponent';
import { Illustration } from '../components/SVGs/Illustration';
import { DivComponent, SectionComponent } from '../components/TagsComponents';

export const SimpleBookmarkManager = () => {
   return (
      <SectionComponent section="sbm">
         <DivComponent box="sbm">
            <ContentSBMComponent />
            <Illustration data-testid="illustration" />
         </DivComponent>
         <BackIllusComponent typeBack="blue_sbm" />
      </SectionComponent>
   );
};
