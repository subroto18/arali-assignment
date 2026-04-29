const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between text-sm text-gray-500">
      <span>© {new Date().getFullYear()} Arali. All rights reserved.</span>

      <div className="flex gap-4">
        <span className="hover:text-gray-700 cursor-pointer">Privacy</span>
        <span className="hover:text-gray-700 cursor-pointer">Terms</span>
        <span className="hover:text-gray-700 cursor-pointer">Support</span>
      </div>
    </footer>
  );
};

export default Footer;
