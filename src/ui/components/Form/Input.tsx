import { InputProps } from '../../../data/@types/IForms';
import { inputStyle } from '../../styles/formsStyles';

export const Input = ({ ...props }: InputProps) => {
   return <input className={inputStyle()} type="text" {...props} />;
};
