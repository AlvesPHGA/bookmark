import { ContentFeaturesComponent } from '../components/Features/ContentFeaturesComponent';
import { TabComponent } from '../components/Features/TabComponent';
import { SectionComponent } from '../components/TagsComponents';

export const Features = () => {
   return (
      <SectionComponent section="features">
         <ContentFeaturesComponent />
         <TabComponent />
      </SectionComponent>
   );
};
