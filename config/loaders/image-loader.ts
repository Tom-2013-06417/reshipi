'use client';

interface Props {
  readonly src: string;
}

export default function myImageLoader({ src }: Props): string {
  return `${src}`;
}
