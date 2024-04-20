import { Illustration_tab } from '../SVGs/Illustration';
import { DivComponent } from '../TagsComponents';
import { ContentTabComponent } from './ContentTabComponent';

const contentTab = [
   {
      title: 'Bookmark in one click',
      image: './illustration-features-tab-1.svg',
      text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.',
   },
   {
      title: 'Inteligent search',
      image: './illustration-features-tab-2.svg',
      text: 'Our powerfull search feature will help you find saved sites in not time at all. No need to trawl through all of your bookmark.',
   },
   {
      title: 'Share your bookmarks',
      image: './illustration-features-tab-3.svg',
      text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
   },
];

export const ContentTabsComponent = ({ value }: { value: number }) => {
   return (
      <>
         {contentTab.map((c, i) => (
            <DivComponent
               data-tab="tab"
               key={i}
               box="tab_contents"
               isContentTab={i === value}
            >
               <Illustration_tab image={c.image} />
               <ContentTabComponent title={c.title} text={c.text} />
            </DivComponent>
         ))}
      </>
   );
};
