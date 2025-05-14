import React from 'react';

interface FileUpload {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: React.FC<FileUpload> = ({ onChange }) => {
  return (
    <label className=" w-30 block p-2 border rounded-md cursor-pointer">
      Upload File
      <input 
        type="file" 
        onChange={onChange} 
        className="hidden" 
      />
    </label>
  );
};

export default FileUpload;
