import NextImage, { StaticImageData } from 'next/image';
import { Fragment, useState } from 'react';
import { Props } from './image.types';

export const Image: React.FC<Props> = props => {
  const {
    imgClassName,
    onClick,
    onLoad: onLoadFromProps,
    resource,
    priority,
    fill,
    src: srcFromProps,
    alt: altFromProps,
    width: widthFromProps,
    height: heightFromProps,
  } = props;

  const [isLoading, setIsLoading] = useState(true);

  let width: number | undefined = widthFromProps;
  let height: number | undefined = heightFromProps;
  let alt = altFromProps;
  let src: StaticImageData | string | undefined = srcFromProps;

  if (!src && resource && typeof resource !== 'string') {
    width = resource.width;
    height = resource.height;
    alt = resource.alt;
    src = `${process.env.NEXT_PUBLIC_CMS_URL}/media/${resource.filename}`;
  }

  const baseClasses = [isLoading, imgClassName].filter(Boolean).join(' ');

  return (
    <Fragment>
      <NextImage
        className={`${baseClasses}`}
        src={src || ''}
        alt={alt || ''}
        onClick={onClick}
        onLoad={() => {
          setIsLoading(false);
          if (typeof onLoadFromProps === 'function') {
            onLoadFromProps();
          }
        }}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
      />
    </Fragment>
  );
};

export default Image;
