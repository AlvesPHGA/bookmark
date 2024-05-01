import React from 'react';
import { VariantProps } from 'tailwind-variants';
import {
   buttonStyle,
   formStyle,
   inputStyle,
} from '../../ui/styles/formsStyles';

export interface FormProps
   extends React.ComponentProps<'form'>,
      VariantProps<typeof formStyle> {}

export interface InputProps
   extends React.ComponentProps<'input'>,
      VariantProps<typeof inputStyle> {}

export interface ButtonProps
   extends React.ComponentProps<'button'>,
      VariantProps<typeof buttonStyle> {}
