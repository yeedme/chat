import React from "react";

interface Props {
  src: string;
  alt: string;
  size?: number;
}
function Avatar({ src, alt, size = 48 }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
    />
  );
}

export default Avatar;
