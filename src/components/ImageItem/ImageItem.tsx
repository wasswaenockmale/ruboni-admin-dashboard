import React from 'react'
import Image from 'next/image'
import { RiDeleteBin6Line } from "react-icons/ri";

interface ImageItemProp{
  image: any,
  name: string,
  size: string,
  handleClick: () => void
}

function ImageItem({ image, name, size, handleClick }: ImageItemProp) {
  
  return (
    <div className='flex items-center justify-between px-5 m-2 border rounded-md border-primary-500/25'>
      <div className='flex items-center gap-5'>
        <Image
          className='w-10 h-10 '
          src={image}
          alt='uploaded-image'
          priority
          width={50}
          height={50}
        />
        <div>
          <h4>{name}</h4>
          <span>{size}</span>
        </div>
      </div>
      <RiDeleteBin6Line
        className="cursor-pointer"
        size={20}
        onClick={handleClick}
      />
    </div>
  )
}

export default ImageItem;