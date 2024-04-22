import { Download } from '../ui/partials/Download';
import { Features } from '../ui/partials/Features';
import { SimpleBookmarkManager } from '../ui/partials/SimpleBookmarkManager';

export const Home = () => {
   return (
      <main>
         <SimpleBookmarkManager />
         <Features />
         <Download />
      </main>
   );
};
