import { NavLinkComponent } from './TagsComponents';

const links = ['features', 'pricing', 'contact'];

export const NavComponent = () => {
   return (
      <nav className="space-x-10">
         {links.map((link) => (
            <NavLinkComponent link="header" key={link}>
               {link}
            </NavLinkComponent>
         ))}
      </nav>
   );
};
