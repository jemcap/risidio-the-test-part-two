import React from "react";

type FormInputProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({
  label,
  type,
  name,
  value,
  handleChange,
}: FormInputProps) => {
  return (
    <div>
      <label className="label">{label}</label>
      <input
        type={type}
        placeholder="Type here"
        name={name}
        value={value}
        onChange={handleChange}
        className="input input-bordered w-full max-w-xs text-white"
      />
    </div>
  );
};

export default FormInput;
