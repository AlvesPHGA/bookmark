import { ButtonProps } from '../../../data/@types/IForms';
import { buttonStyle } from '../../styles/formsStyles';

export const Button = ({ ...props }: ButtonProps) => {
   return <button className={buttonStyle()} {...props} />;
};
