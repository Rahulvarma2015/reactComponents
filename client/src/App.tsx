import React, { useState } from 'react';
import RadioButton from './components/RadioButton';
import ToggleSwitch from './components/ToggleSwitch';
import FileUpload from './components/FileUpload';
import DatePicker from './components/DatePicker';

const App: React.FC = () => {
  const [radioValue, setRadioValue] = useState<string>('');
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [date, setDate] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <RadioButton 
        name="choice" 
        value="option1" 
        checked={radioValue === 'option1'} 
        onChange={() => setRadioValue('option1')} 
        label="Option 1" 
      />
      <RadioButton 
        name="choice" 
        value="option2" 
        checked={radioValue === 'option2'} 
        onChange={() => setRadioValue('option2')} 
        label="Option 2" 
      />
      <ToggleSwitch 
        isOn={isToggled} 
        handleToggle={() => setIsToggled(!isToggled)} 
      />
      <DatePicker 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <FileUpload 
        onChange={handleFileChange} 
      />
      {file && <p>Uploaded: {file.name}</p>}
    </div>
  );
};

export default App;
