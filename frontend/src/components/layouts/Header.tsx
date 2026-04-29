const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
          A
        </div>
        <h1 className="text-lg font-semibold text-gray-800">Arali Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm text-gray-600 hover:text-gray-900">
          Dashboard
        </button>
        <button className="text-sm text-gray-600 hover:text-gray-900">
          Customers
        </button>

        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
          U
        </div>
      </div>
    </header>
  );
};

export default Header;
