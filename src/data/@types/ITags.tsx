import React from 'react';
import { VariantProps } from 'tailwind-variants';
import {
   divStyle,
   navLinkStyle,
   sectionStyle,
} from '../../ui/styles/tagsStyles';

export interface SectionComponentProps
   extends React.ComponentProps<'section'>,
      VariantProps<typeof sectionStyle> {}

export interface DivComponentProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof divStyle> {}

export interface NavLinkComponentProps
   extends React.ComponentProps<'a'>,
      VariantProps<typeof navLinkStyle> {}
