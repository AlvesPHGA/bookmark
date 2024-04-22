import React from 'react';
import { VariantProps } from 'tailwind-variants';
import {
   divStyle,
   imgStyle,
   navLinkStyle,
   sectionStyle,
   svgStyle,
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

export interface SVGComponentProps
   extends React.ComponentProps<'svg'>,
      VariantProps<typeof svgStyle> {}

export interface ImageComponentProps
   extends React.ComponentProps<'img'>,
      VariantProps<typeof imgStyle> {}
