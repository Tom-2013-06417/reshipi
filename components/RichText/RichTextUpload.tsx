import { Media as MediaType } from '../../generated/payload-types';
import { Media } from '../Media/Media';
import { Node } from './types';

type Props = {
  node: Node;
  className?: string;
};

export const RichTextUpload: React.FC<Props> = props => {
  const {
    node: { value },
    className,
  } = props;

  const styles: React.CSSProperties = {};

  return (
    <div style={styles} className={className}>
      <Media resource={value as MediaType} />
    </div>
  );
};

export default RichTextUpload;
