import fallback from "../assets/logo.svg";
const Img = ({ src, alt = "image", className = "", ...props }) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = fallback;
  };

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className={`object-contain ${className}`}
      {...props}
    />
  );
};

export default Img;
