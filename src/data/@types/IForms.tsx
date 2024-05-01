import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { buttonStyle, formStyle } from '../../ui/styles/formsStyles';

export interface FormProps
   extends React.ComponentProps<'form'>,
      VariantProps<typeof formStyle> {}

export interface ButtonProps
   extends React.ComponentProps<'button'>,
      VariantProps<typeof buttonStyle> {}
