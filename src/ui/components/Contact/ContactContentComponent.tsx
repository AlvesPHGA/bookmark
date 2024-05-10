import { contactStyle } from '../../styles/contactStyle';
const { content } = contactStyle();

export const ContactContentComponent = () => {
   return (
      <div className={content()}>
         <span className="text-white font-medium tracking-[.3em]">
            35,000+ ALREADY JOINED
         </span>
         <h2 className="text-white text-3xl">
            Stay up-to-date with what we're doing
         </h2>
      </div>
   );
};
