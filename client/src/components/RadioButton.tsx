import React from 'react';

interface RadioButton {
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const RadioButton: React.FC<RadioButton> = ({ name, value, checked, onChange, label }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer text-gray-700">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="appearance-none w-5 h-5 rounded-full border-2 border-gray-300 checked:bg-blue-500 checked:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all cursor-pointer"
      />
      <span className="select-none">{label}</span>
    </label>
  );
};

export default RadioButton;
