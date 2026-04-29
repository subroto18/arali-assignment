import Button from "../ui/Button";
import { CUSTOMER_TABLE_COLUMNS } from "../config/customerTable.config";

const CustomerTable = ({ customers, onDelete, loading, error }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="max-h-[70vh] overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center h-[300px]">
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              <p>Loading customers...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-[300px]">
            <div className="text-center text-red-500">
              <p className="font-medium">Something went wrong</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-600 text-sm sticky top-0">
              <tr>
                {CUSTOMER_TABLE_COLUMNS.map((col) => (
                  <th key={col.key} className="p-3">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {customers.map((c, index) => (
                <tr key={c.id} className="border-t hover:bg-gray-50 transition">
                  <td className="p-3 text-gray-500">{index + 1}</td>
                  <td className="p-3 font-medium">{c.name}</td>
                  <td className="p-3 text-gray-600">{c.email}</td>
                  <td className="p-3 text-gray-600">{c.phone}</td>
                  <td className="p-3 text-center">
                    <Button
                      onClick={() => onDelete(c.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}

              {customers.length === 0 && (
                <tr>
                  <td
                    colSpan={CUSTOMER_TABLE_COLUMNS.length}
                    className="text-center p-6 text-gray-400"
                  >
                    No customers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CustomerTable;
