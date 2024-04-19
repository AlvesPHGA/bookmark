import { DivComponent, NavLinkComponent } from '../TagsComponents';

export const ContentTabComponent = () => {
   return (
      <DivComponent>
         <h3>Bookmark in one click</h3>
         <p>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favorite sites.
         </p>
         <NavLinkComponent>More Info</NavLinkComponent>
      </DivComponent>
   );
};
