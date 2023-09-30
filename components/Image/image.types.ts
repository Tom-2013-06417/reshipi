import type { StaticImageData } from 'next/image';
import type { ElementType, Ref } from 'react';
import type { Media } from '../../generated/payload-types';

export interface Props {
  readonly src: StaticImageData | string;
  readonly alt?: string;
  readonly resource: Media;
  readonly sizes?: string;
  readonly priority?: boolean;
  readonly fill?: boolean;
  readonly className?: string;
  readonly imgClassName?: string;
  readonly htmlElement?: ElementType | null;
  readonly ref?: Ref<null | HTMLImageElement>;
  readonly width?: number;
  readonly height?: number;
  onClick?: () => void;
  onLoad?: () => void;
}
