import React from "react";

type FormInputProps = {
  label: string;
  name: string;

  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const FormTextArea = ({ label, name, value, handleChange }: FormInputProps) => {
  return (
    <div>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        className="text-white textarea textarea-bordered w-full max-w-lg rounded-md shadow-sm  p-3"
        rows={5}
      />
    </div>
  );
};

export default FormTextArea;
