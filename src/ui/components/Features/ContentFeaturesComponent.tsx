import { featuresStyle } from '../../styles/featuresStyle';

const { content } = featuresStyle();

export const ContentFeaturesComponent = () => {
   return (
      <div className={content()}>
         <h2>Features</h2>
         <p className="w-[42%] mx-auto">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
         </p>
      </div>
   );
};
