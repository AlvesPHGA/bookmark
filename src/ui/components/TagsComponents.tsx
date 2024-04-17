import {
   DivComponentProps,
   NavLinkComponentProps,
   SectionComponentProps,
} from '../../data/@types/ITags';

import { divStyle, navLinkStyle, sectionStyle } from '../styles/tagsStyles';

export const SectionComponent = ({
   section,
   ...props
}: SectionComponentProps) => {
   return <section className={sectionStyle({ section })} {...props} />;
};

export const DivComponent = ({ box, ...props }: DivComponentProps) => {
   return <div className={divStyle({ box })} {...props} />;
};

export const NavLinkComponent = ({ ...props }: NavLinkComponentProps) => {
   return <a href="#" className={navLinkStyle()} {...props} />;
};
