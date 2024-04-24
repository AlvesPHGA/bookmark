import React from 'react';
import { VariantProps, tv } from 'tailwind-variants';

interface InputProps
   extends React.ComponentProps<'input'>,
      VariantProps<typeof inputStyle> {}

const inputStyle = tv({
   base: 'h-11 w-[280px] text-lg px-2 rounded-md',
});

export const Input = ({ ...props }: InputProps) => {
   return <input className={inputStyle()} type="text" {...props} />;
};
