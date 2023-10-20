import React from 'react'
import Image from 'next/image'
import logo from "../../../../public/images/Avator.png"
import { MdKeyboardArrowDown } from "react-icons/md"

interface ProfileSection{
  handleShowProfileCard: () => void;
}
function ProfileSection({handleShowProfileCard}:ProfileSection) {
  return (
    <div className="flex items-center justify-between w-4/6 pl-1 bg-white rounded-md">
      <div className="flex gap-2">
        <Image
          src={logo}
          width={20}
          className="rounded-md"
          alt="user: image"
        />
        <div className="hidden font-roboto h-fit md:flex md:flex-col">
          <h5 className="text-xs">Name</h5>
          <p className="opacity-50 text-xxs">Administrator</p>
        </div>
      </div>
      <MdKeyboardArrowDown
        className="w-6 h-6 fill-primary-500"
        onClick={handleShowProfileCard}
      />
    </div>  )
}

export default ProfileSection