/* eslint-disable @next/next/no-img-element */
import React from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
};

export default function StaticImage({ src, alt, width, height, ...rest }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...rest}
    />
  );
}