"use client"

import React, { useState } from 'react';
import Image from 'next/image';

import { CiMenuKebab } from "react-icons/ci";

import logo from "../../../../../../public/images/Avator.png";

function Index() {
  const [showModal, setShowModal] = useState(false);
  
  const handleModal = () => {
    setShowModal(!showModal);
  }
  return (
    <div className='relative flex justify-between w-full p-1 mt-2 border rounded-md'>
      <Image
        src={logo}
        width={50}
        height={50}
        quality={80}
        alt='booked-accom'
        className='w-10 h-full'
      />
      <div className='text-sm font-roboto'>
        <h4>Title</h4>
        <p>{`28 Oct`}-{`30 Nov`}</p>
        <p className='text-xs'>
          Mark Wyne |
          <span className=' text-secondary-100'>
            31 Days ago
          </span>
        </p>
      </div>
      <CiMenuKebab
        className="w-4 h-4 cursor-pointer"
        onClick={handleModal}
      />
      <div
        className={`${showModal ? "absolute top-0 right-0 z-10 bg-white w-32 h-40 border shadow" : "hidden"}`}
      >
        <div
          className='w-full p-1 bg-white'
        >
          <div className='flex justify-between'>
            <div></div>
            <span
              className='w-10 h-10 cursor-pointer'
              onClick={handleModal}
            >
              &times;
            </span>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Index