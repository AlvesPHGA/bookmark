import {
   DivComponentProps,
   ImageComponentProps,
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
   errorInput,
   ...props
}: DivComponentProps) => {
   return (
      <div className={divStyle({ box, isContentTab, errorInput })} {...props} />
   );
};

export const NavLinkComponent = ({
   link,
   card,
   ...props
}: NavLinkComponentProps) => {
   return <a href="#" className={navLinkStyle({ link, card })} {...props} />;
};

export const ImageComponent = ({ ...props }: ImageComponentProps) => {
   return <img {...props} />;
};
