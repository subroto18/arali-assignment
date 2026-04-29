import React from "react";
import Input from "./Input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const FormField: React.FC<Props> = ({ label, error, ...inputProps }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm font-medium text-neutral-700">{label}</label>
      )}

      <Input {...inputProps} />

      {error && <p className="text-danger text-sm">{error}</p>}
    </div>
  );
};

export default FormField;
