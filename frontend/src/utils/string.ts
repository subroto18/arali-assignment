export const truncate = (value: string, max = 20) => {
  if (!value) return "";
  return value.length > max ? `${value.slice(0, max)}...` : value;
};
