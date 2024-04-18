import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { backIllusStyle } from '../../ui/styles/backIllusStyle';

export interface IBackIllustrationProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof backIllusStyle> {}
