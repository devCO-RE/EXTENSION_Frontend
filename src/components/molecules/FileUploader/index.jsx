import React, { useRef, useState, useEffect } from 'react';
import { Button } from "@material-ui/core";
import './style.css';

const  FileUploader = ({ setFile }) => {
  const inputRef = useRef(null);


  const handleclickInput = () => {
    inputRef.current.click();
  };

  const handleOnChange = evt => {
    setFile(evt.target.files[0]);
  };

  return (
    <div>
      <div className="file-blk">
        <input type="file" onChange={handleOnChange} ref={inputRef} hidden />
      </div>

      <Button className="img-btn"  variant="outlined" color="secondary" onClick={handleclickInput}>
        파일 선택
      </Button>
    </div>
  );
};

export default FileUploader;
