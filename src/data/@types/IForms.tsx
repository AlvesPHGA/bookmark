import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { buttonStyle } from '../../ui/styles/formsStyles';

export interface ButtonProps
   extends React.ComponentProps<'button'>,
      VariantProps<typeof buttonStyle> {}
