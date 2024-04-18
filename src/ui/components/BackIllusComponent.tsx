import { IBackIllustrationProps } from '../../data/@types/IBackIllustration';
import { backIllusStyle } from '../styles/backIllusStyle';

export const BackIllusComponent = ({
   typeBack,
   ...props
}: IBackIllustrationProps) => {
   return <div className={backIllusStyle({ typeBack })} {...props} />;
};
