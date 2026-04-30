import fallback from "../assets/logo.svg";
import type { ImgHTMLAttributes, SyntheticEvent } from "react";

type ImgProps = ImgHTMLAttributes<HTMLImageElement> & {
  src?: string;
};

const Img = ({ src, alt = "image", className = "", ...props }: ImgProps) => {
  const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = fallback;
  };

  return (
    <img
      src={src || fallback}
      alt={alt}
      onError={handleError}
      className={`object-contain ${className}`}
      {...props}
    />
  );
};

export default Img;
