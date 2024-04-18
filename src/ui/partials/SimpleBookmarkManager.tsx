import { BackIllusComponent } from '../components/BackIllusComponent';
import { ContentSBMComponent } from '../components/SBM/ContentSBMComponent';
import { DivComponent, SectionComponent } from '../components/TagsComponents';

export const SimpleBookmarkManager = () => {
   return (
      <SectionComponent section="sbm">
         <DivComponent box="sbm">
            <ContentSBMComponent />
            <BackIllusComponent />
         </DivComponent>
      </SectionComponent>
   );
};
