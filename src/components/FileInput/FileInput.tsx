import React from 'react';
import { GrFormUpload } from "react-icons/gr";
import { PiImagesLight } from "react-icons/pi"

function FileInput() {
  
  return (
    <label
      className='flex flex-col items-center justify-center w-full h-56 border border-dashed rounded-md border-primary-500 bg-secondary-100/25'
      htmlFor='file-input'
    >
      <PiImagesLight size={100}/>
      <input
        className='w-full text-transparent file:w-full file:text-transparent file:border-none file:hover:bg-inherit'
        type="file"
        name="image-upload"
        id="file-input"
        accept=".jpg, .jpeg, .png"
        title=""
      />
      <div className="flex justify-center w-full gap-2">
        <GrFormUpload size={20} className=" fill-primary-500"/>
        Click here to upload images
      </div>
    </label>
  );
}

export default FileInput