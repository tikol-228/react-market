import React from 'react';

interface ImgProps {
  src: string;
  alt?: string;
  className?: string;
}

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  className = '',
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default Img;
