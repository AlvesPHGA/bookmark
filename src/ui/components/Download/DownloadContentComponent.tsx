import { downloadStyle } from '../../styles/downloadStyle';

const { content } = downloadStyle();

export const DownloadContentComponent = () => {
   return (
      <div className={content()}>
         <h2>Download the extension</h2>
         <p>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
         </p>
      </div>
   );
};
