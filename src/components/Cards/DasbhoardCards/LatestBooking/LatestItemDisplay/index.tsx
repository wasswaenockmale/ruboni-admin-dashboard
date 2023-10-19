"use client"

import React, { useState } from 'react';

// react-icons 
import { CiMenuKebab } from "react-icons/ci";

// images 
import Image from 'next/image';
import logo from "../../../../../../public/images/Avator.png";

// components 
import AssistantOptions from '@/components/Cards/AssistantOptions/AssistantOptions';


interface LastestItemProp{
  index:number
}

function Index({index}:LastestItemProp) {
  const [showModal, setShowModal] = useState(false);
  
  const handleModal = () => {
    setShowModal(!showModal);
  }
  return (
    <div className={`relative flex justify-between w-full p-1 border-b ${index == 0 ? ' border-t' : ''} mt-2 pr-5 gap-3`}>
      <Image
        src={logo}
        width={50}
        height={50}
        quality={80}
        alt='booked-accom'
        className='w-10 h-full rounded-full'
      />
      <div className='w-4/5 text-sm font-roboto'>
        <h4 className='text-base font-bold'>Title</h4>
        <p>Date: {`28 Oct`}-{`30 Nov`}</p>
        <div className='flex justify-between w-full text-xs'>
          <span>Mark Wyne</span>
          <span className='ml-1 text-secondary-100'>
            31 Days ago
          </span>
        </div>
      </div>
      <CiMenuKebab
        className="w-4 h-4 cursor-pointer"
        onClick={handleModal}
      />
      <AssistantOptions
        showModal={showModal}
        handleModal={handleModal}
      />
    </div>
  )
}

export default Index