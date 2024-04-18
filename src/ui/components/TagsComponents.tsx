import {
   DivComponentProps,
   ImageComponentProps,
   NavLinkComponentProps,
   SectionComponentProps,
} from '../../data/@types/ITags';

import {
   divStyle,
   imageStyle,
   navLinkStyle,
   sectionStyle,
} from '../styles/tagsStyles';

export const SectionComponent = ({
   section,
   ...props
}: SectionComponentProps) => {
   return <section className={sectionStyle({ section })} {...props} />;
};

export const DivComponent = ({ box, ...props }: DivComponentProps) => {
   return <div className={divStyle({ box })} {...props} />;
};

export const NavLinkComponent = ({ link, ...props }: NavLinkComponentProps) => {
   return <a href="#" className={navLinkStyle({ link })} {...props} />;
};

export const ImageComponent = ({ ...props }: ImageComponentProps) => {
   return <img className={imageStyle()} {...props} />;
};
