import React from "react";
import Button from "./Button";

type Props = {
  isOpen: boolean;
  title?: string;
  message: string;
  loading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal: React.FC<Props> = ({
  isOpen,
  title = "Confirm Action",
  message,
  onConfirm,
  onCancel,
  loading,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[320px]">
        <h3 className="text-lg font-semibold mb-2 text-neutral-800">{title}</h3>
        <p className="text-sm text-neutral-600 mb-4">{message}</p>

        <div className="flex justify-end gap-2">
          <Button
            onClick={onCancel}
            className="px-3 py-1 rounded bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
          >
            Cancel
          </Button>

          <Button
            loading={loading}
            onClick={onConfirm}
            className="px-3 py-1 rounded bg-danger text-white hover:bg-danger-hover"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
