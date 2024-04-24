import React from 'react';

interface InputProps extends React.ComponentProps<'input'> {}

export const Input = ({ ...props }: InputProps) => {
   return <input type="text" {...props} />;
};
