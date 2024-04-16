import { NavLinkComponent } from './TagsComponents';

const links = ['features', 'pricing', 'contact'];

export const NavComponent = () => {
   return (
      <nav>
         {links.map((link) => (
            <NavLinkComponent key={link}>{link}</NavLinkComponent>
         ))}
      </nav>
   );
};
