import React from 'react'

interface TextInputProps{
  name: string,
  id: string,
  type: string
  handleSelectedDate: (event: any) => void;
}

function TextInput({ name, id, handleSelectedDate, type }: TextInputProps) {
  
  return (
    <label
      className='p-1 border rounded-md'
      htmlFor={id}
    >
      <input
        type={type}
        name={name}
        id={id}
        onChange={handleSelectedDate}
        className='px-2 rounded-md'
      />
    </label>
  )
}

export default TextInput;