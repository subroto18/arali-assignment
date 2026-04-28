interface Props {
  message: string;
  type: "success" | "error";
}

const Alert: React.FC<Props> = ({ message, type }) => {
  const base = "p-3 rounded text-sm";

  const styles =
    type === "success"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  return <div className={`${base} ${styles}`}>{message}</div>;
};

export default Alert;
