import { ContactContentComponent } from '../components/Contact/ContactContentComponent';
import { ContactFormComponent } from '../components/Contact/ContactFormComponent';
import { SectionComponent } from '../components/TagsComponents';

export const Contact = () => {
   return (
      <SectionComponent section="contact">
         <ContactContentComponent />
         <ContactFormComponent />
      </SectionComponent>
   );
};
