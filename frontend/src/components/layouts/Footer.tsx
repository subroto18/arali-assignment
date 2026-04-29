import { THEME } from "../../config/theme";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500">
      <span className="text-center md:text-left">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://araliventures.in/"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-semibold transition ${THEME.text.primary}`}
        >
          Arali Ventures
        </a>
        . All rights reserved.
      </span>

      <div className="flex items-center gap-1 mt-2 md:mt-0">
        <span>Developed by</span>
        <a
          href="https://subroto-chakraborty.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-semibold transition ${THEME.text.primary}`}
        >
          Subroto Chakraborty
        </a>
      </div>
    </footer>
  );
};

export default Footer;
