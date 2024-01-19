'use client';

import { useState } from 'react';
import NextImage from 'next/image';
import { Props } from './types';
import { MEDIA_URL } from '../../config';

export const Image: React.FC<Props> = props => {
  const {
    alt: altFromProps,
    fill,
    height: heightFromProps,
    imgClassName,
    onClick,
    onLoad: onLoadFromProps,
    priority,
    resource,
    src: srcFromProps,
    width: widthFromProps,
  } = props;

  const [isLoading, setIsLoading] = useState(true);

  let alt = altFromProps;
  let height = heightFromProps;
  let src = srcFromProps;
  let width = widthFromProps;

  if (!src && resource && typeof resource !== 'string') {
    alt = resource.alt;
    height = resource.height;
    src = `${MEDIA_URL}/${resource.filename}`;
    width = resource.width;
  }

  const baseClasses = [imgClassName, isLoading].filter(Boolean).join(' ');

  return (
    <NextImage
      alt={alt || ''}
      className={`${baseClasses}`}
      height={!fill ? height : undefined}
      priority={priority}
      src={src || ''}
      width={!fill ? width : undefined}
      onClick={onClick}
      onLoad={() => {
        setIsLoading(false);
        if (typeof onLoadFromProps === 'function') {
          onLoadFromProps();
        }
      }}
    />
  );
};
