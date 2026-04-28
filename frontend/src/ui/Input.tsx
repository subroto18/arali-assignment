interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Props> = (props) => {
  return (
    <input
      {...props}
      className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default Input;
