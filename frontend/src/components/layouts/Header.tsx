import Logo from "../../assets/logo.svg";
import Img from "../../ui/Img";
import { THEME } from "../../config/theme";

const Header = () => {
  return (
    <header className="bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <Img src={Logo} alt="Arali Logo" />
      </div>

      <div className="flex items-center gap-6">
        <button
          className={`text-sm font-medium transition duration-200 ${THEME.text.primary}`}
        >
          Dashboard
        </button>

        <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold shadow-sm">
          SC
        </div>
      </div>
    </header>
  );
};

export default Header;
