import { NavLinkComponent } from './TagsComponents';

const links = ['features', 'pricing', 'contact'];

export const NavComponent = () => {
   return (
      <nav className="space-x-10">
         {links.map((link) => (
            <NavLinkComponent key={link}>{link}</NavLinkComponent>
         ))}
      </nav>
   );
};
