import {
   DivComponentProps,
   NavLinkComponentProps,
   SectionComponentProps,
} from '../../data/@types/ITags';

import { divStyle, sectionStyle } from '../styles/tagsStyles';

export const SectionComponent = ({ ...props }: SectionComponentProps) => {
   return <section className={sectionStyle()} {...props} />;
};

export const DivComponent = ({ box, ...props }: DivComponentProps) => {
   return <div className={divStyle({ box })} {...props} />;
};

export const NavLinkComponent = ({ ...props }: NavLinkComponentProps) => {
   return <a {...props} />;
};
