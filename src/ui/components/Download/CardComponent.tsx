import { Button } from '../Form/Button';
import { DivComponent, ImageComponent } from '../TagsComponents';

export const CardComponent = ({
   src,
   alt,
   title,
   span,
}: {
   src: string;
   alt: string;
   title: string;
   span: string;
}) => {
   return (
      <DivComponent>
         <DivComponent>
            <ImageComponent src={src} alt={alt} />
            <h3>{title}</h3>
            <span>{span}</span>
         </DivComponent>
         <DivComponent>
            <Button>Add & Install Extension</Button>
         </DivComponent>
      </DivComponent>
   );
};
