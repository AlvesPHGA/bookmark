import { CardsContent } from '../components/Download/CardsContent';
import { DownloadContentComponent } from '../components/Download/DownloadContentComponent';
import { SectionComponent } from '../components/TagsComponents';

export const Download = () => {
   return (
      <SectionComponent section="download">
         <DownloadContentComponent />
         <CardsContent />
      </SectionComponent>
   );
};
