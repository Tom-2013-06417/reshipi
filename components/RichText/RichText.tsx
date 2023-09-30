import { CustomRenderers, Serialize } from './Serialize';

export const RichText: React.FC<{
  className?: string;
  content: any;
  customRenderers?: CustomRenderers;
}> = ({ content, customRenderers }) => {
  if (!content) {
    return null;
  }

  return <Serialize content={content} customRenderers={customRenderers} />;
};

export default RichText;
