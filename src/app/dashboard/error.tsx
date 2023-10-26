"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { BiError } from "react-icons/bi";

function Error({error, reset}:{error: Error, reset: () => void}) {
  const router = useRouter();

  return (
    <div className=' w-full h-full flex flex-col justify-center items-center'>
      <BiError size={20} className=" fill-red-500"/>
      <p>Something went wrong</p>
      <button
        className=' font-poppins border border-primary-500 px-3 rounded-md text-primary-500 hover:bg-primary-500 hover:text-white mt-5'
        onClick={() => {
          router.refresh()
        }}
      >Try again!</button>
    </div>
  )
}

export default Error;