import { Download } from '../ui/partials/Download';
import { Features } from '../ui/partials/Features';
import { FrequentlyAskedQuestions } from '../ui/partials/FrequentlyAskedQuestions';
import { SimpleBookmarkManager } from '../ui/partials/SimpleBookmarkManager';

export const Home = () => {
   return (
      <main>
         <SimpleBookmarkManager />
         <Features />
         <Download />
         <FrequentlyAskedQuestions />
      </main>
   );
};
