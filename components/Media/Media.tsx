import { ElementType, Fragment } from 'react';

import { Image as ImageComponent } from './Image';
import { Props } from './types';

export const Media: React.FC<Props> = props => {
  const { className, htmlElement = 'div' } = props;

  const Tag = (htmlElement as ElementType) || Fragment;

  return (
    <Tag {...(htmlElement !== null ? { className } : {})}>
      <ImageComponent {...props} />
    </Tag>
  );
};
