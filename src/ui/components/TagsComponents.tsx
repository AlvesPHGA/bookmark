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

export const DivComponent = ({
   box,
   isContentTab,
   ...props
}: DivComponentProps) => {
   return <div className={divStyle({ box, isContentTab })} {...props} />;
};

export const NavLinkComponent = ({ link, ...props }: NavLinkComponentProps) => {
   return <a href="#" className={navLinkStyle({ link })} {...props} />;
};

export const ImageComponent = ({
   src,
   alt,
   ...props
}: {
   src?: string;
   alt?: string;
}) => {
   return <img src={src} alt={alt} {...props} />;
};
