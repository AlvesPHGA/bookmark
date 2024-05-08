import { BackIllusComponent } from '../components/BackIllusComponent';
import { ContentFeaturesComponent } from '../components/Features/ContentFeaturesComponent';
import { TabComponent } from '../components/Features/TabComponent';

import { featuresStyle } from '../styles/featuresStyle';

const { section } = featuresStyle();

export const Features = () => {
   return (
      <section className={section()}>
         <ContentFeaturesComponent />
         <TabComponent />
         <BackIllusComponent typeBack="blue_feat" />
      </section>
   );
};
