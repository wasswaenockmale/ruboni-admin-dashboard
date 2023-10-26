"use client"

import React, { Fragment } from 'react';
import { useField } from "formik";

import { DateInputProps } from '@/types/inputFields';

function Index({label, width, ...Props}: DateInputProps) {
  const [field, meta] = useField(Props);
  
  return (
    <Fragment>
      <label className={`flex flex-col font-poppins ${width} p-1`}>
        {label}
        <input {...field} {...Props} className='w-full p-2 text-sm border rounded-sm font-poppins'/>
      </label>
      {
        meta.touched && meta.error ?
          <p>{meta.error}</p> :
          null
      }
    </Fragment>
  )
}

export default Index