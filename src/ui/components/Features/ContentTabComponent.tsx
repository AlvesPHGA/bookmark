import { DivComponent, NavLinkComponent } from '../TagsComponents';

export const ContentTabComponent = () => {
   return (
      <DivComponent box="tab_content">
         <h3 className="text-3xl font-medium">Bookmark in one click</h3>
         <p>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favorite sites.
         </p>
         <NavLinkComponent link="blue_cta">More Info</NavLinkComponent>
      </DivComponent>
   );
};
