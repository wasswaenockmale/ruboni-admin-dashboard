import Link from 'next/link';
import React from 'react'
// react icons 
import { HiOutlineXMark } from "react-icons/hi2";

interface OptionProps{
  showModal: boolean,
  handleModal: () => void
}

function AssistantOptions({showModal, handleModal}:OptionProps) {
  return (
    <div
      className={`${showModal ? "absolute top-2 right-0 z-10 bg-white w-32 shadow-xl border" : "hidden"}`}
    >
      <HiOutlineXMark
        className='absolute top-0 w-5 h-5 cursor-pointer right-1'
        onClick={handleModal}
      />
      <div className='flex flex-col w-full h-full gap-3 p-2 pt-5 text-left'>
        <Link
          href='/#'
          className='pl-5 border rounded-sm cursor-pointer font-roboto text-primary-500 border-primary-500 hover:bg-primary-500 hover:text-white'
        >
          View
        </Link>
        <button
          className='pl-5 text-left border rounded-sm cursor-pointer text-success-500 border-success-500 hover:bg-success-500 hover:text-white'
        >
          Confirm
        </button>
        <button
          className='pl-5 text-left border rounded-sm cursor-pointer text-warning-500 border-warning-500 hover:bg-warning-500 hover:text-white'
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AssistantOptions