import { ButtonProps } from '../../../data/@types/IForms';
import { buttonStyle } from '../../styles/formsStyles';

export const Button = ({ types, isActiveTab, ...props }: ButtonProps) => {
   return <button className={buttonStyle({ types, isActiveTab })} {...props} />;
};
