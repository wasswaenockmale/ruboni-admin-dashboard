import React from "react";
import { IoNotifications } from 'react-icons/io5'

const Index: React.FC = () => {
  return (
    <div className="flex justify-between h-20 p-5 pl-10 pr-10 bg-white">
      <h1 className="font-bold font-roboto text-primary-500 text-h5">Overview</h1>
      <IoNotifications size={20} className=" fill-primary-500" />
    </div>
  )
}

export default Index;