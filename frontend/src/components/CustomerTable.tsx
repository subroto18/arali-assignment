import { memo } from "react";
import Button from "../ui/Button";
import { CUSTOMER_TABLE_COLUMNS } from "../config/customerTable.config";
import type { CustomerTableProps } from "../types/customer";
import { MAX_TRUNCATE_LENGTH } from "../utils/helper";
import React from "react";
const ACTION = "Action";

const CustomerTable: React.FC<CustomerTableProps> = ({
  customers,
  onDelete,
  loading = false,
  error = null,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="max-h-[70vh] overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center h-[300px]">
            <div className="flex flex-col items-center gap-2 text-neutral-500">
              <div className="w-6 h-6 border-2 border-neutral-300 border-t-primary rounded-full animate-spin"></div>
              <p>Loading customers...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-[300px]">
            <div className="text-center text-danger">
              <p className="font-medium">Something went wrong</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead className="bg-neutral-100 text-neutral-600 text-sm sticky top-0 ">
              <tr>
                {CUSTOMER_TABLE_COLUMNS.map((col) => (
                  <th
                    key={col.key}
                    className={`${col.label == ACTION ? "text-center" : ""} p-3`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {customers.map((c, index) => (
                <tr
                  key={c.id}
                  className="border-t border-neutral-200 hover:bg-neutral-50 transition"
                >
                  <td className="p-3 text-neutral-500">{index + 1}</td>
                  <td
                    title={c.name}
                    style={{ maxWidth: `${MAX_TRUNCATE_LENGTH}px` }}
                    className={`p-3 font-medium text-neutral-800   truncate`}
                  >
                    {c.name}
                  </td>

                  <td
                    title={c.email}
                    style={{ maxWidth: `${MAX_TRUNCATE_LENGTH}px` }}
                    className={`p-3 font-medium text-neutral-800   truncate`}
                  >
                    {c.email}
                  </td>
                  <td className="p-3 text-neutral-600">{c.phone}</td>
                  <td className="p-3 text-center">
                    <Button
                      onClick={() => onDelete(c.id)}
                      className="bg-danger text-white px-3 py-1 rounded-lg hover:bg-danger-hover text-sm"
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
                    className="text-center p-6 text-neutral-400"
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

export default memo(CustomerTable);
