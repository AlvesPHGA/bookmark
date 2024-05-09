import { CardsContent } from '../components/Download/CardsContent';
import { DownloadContentComponent } from '../components/Download/DownloadContentComponent';

import { downloadStyle } from '../styles/downloadStyle';

const { section } = downloadStyle();

export const Download = () => {
   return (
      <section className={section()}>
         <DownloadContentComponent />
         <CardsContent />
      </section>
   );
};
