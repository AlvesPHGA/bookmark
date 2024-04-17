import { ButtonProps } from '../../../data/@types/IForms';

export const Button = ({ ...props }: ButtonProps) => {
   return (
      <button
         className="uppercase border-2 border-softRed rounded-md px-7 py-1 text-white bg-softRed hover:text-softRed hover:bg-transparent transition-all"
         {...props}
      />
   );
};
