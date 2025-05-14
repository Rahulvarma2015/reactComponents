import React from 'react';

interface DatePickerProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  return (
    <input
      type="date"
      value={value}
      onChange={onChange}
      className="p-2 border rounded-md"
    />
  );
};

export default DatePicker;
