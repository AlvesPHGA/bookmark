import { ContactContentComponent } from '../components/Contact/ContactContentComponent';
import { ContactFormComponent } from '../components/Contact/ContactFormComponent';

import { contactStyle } from '../styles/contactStyle';

const { section } = contactStyle();

export const Contact = () => {
   return (
      <section className={section()}>
         <ContactContentComponent />
         <ContactFormComponent />
      </section>
   );
};
