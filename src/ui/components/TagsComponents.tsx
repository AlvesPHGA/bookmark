import {
   DivComponentProps,
   NavLinkComponentProps,
   SectionComponentProps,
} from '../../data/@types/ITags';

export const SectionComponent = ({ ...props }: SectionComponentProps) => {
   return <section {...props} />;
};

export const DivComponent = ({ ...props }: DivComponentProps) => {
   return <div {...props} />;
};

export const NavLinkComponent = ({ ...props }: NavLinkComponentProps) => {
   return <a {...props} />;
};
