import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[80vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-neutral-800">404</h1>
      <p className="text-neutral-500 mt-2">Page not found</p>

      <Button className="mt-6" onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
