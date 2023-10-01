import { Serialize } from './Serialize';
import { Node } from './types';

interface Props {
  content: Node[];
  className?: string;
}

export const RichText: React.FC<Props> = ({ content, className }) => {
  if (!content) {
    return <></>;
  }

  return (
    <div className={className}>
      <Serialize content={content} />
    </div>
  );
};
