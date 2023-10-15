"use client"

import React, { Fragment } from "react";

import NavLink from "@/components/NavLink/NavBar"

import { IoNotifications } from 'react-icons/io5'
import { GrMenu } from "react-icons/gr";
import { BiSearch } from "react-icons/bi"
import { MdOutlineCancel, MdKeyboardArrowDown } from "react-icons/md"

import { menuData } from "@/utils/menuData";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/images/Avator.png"

const Index: React.FC = () => {

  const pathname = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);
  
  const handleNotificationClick = () => {
    
  }

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }
  
  return (
    <div className={`relative flex items-center justify-between h-14 rounded-md border ${showMenu ? "" : "p-2 pl-5 pr-5"}`}>
      <div className="flex justify-between w-full">
        <div className="items-center hidden pl-1 bg-white rounded-md md:flex lg:w-1/4 md:w-2/5" >
          <BiSearch
            className="w-5 h-5"
          />
          <input
            type="text"
            name="search"
            className="w-full p-1 pl-5"
            placeholder="Search for ..."
          />
        </div>
        <GrMenu
          className="w-8 h-8 cursor-pointer lg:hidden"
          onClick={handleMenuClick}
        />
        <div className="flex justify-between cursor-pointer lg:w-1/5 md:w-2/6">
          <div className="relative hidden p-1 bg-white rounded-md cursor-pointer md:flex">
            <span className="absolute w-2 h-2 bg-red-500 rounded-full top-1 right-2 font-roboto"></span>
            <IoNotifications
              className="w-8 h-8 fill-primary-500"
              onClick={handleNotificationClick}
            />
          </div>
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
            <MdKeyboardArrowDown className="w-6 h-6"/>
          </div>
        </div>
        
      </div>

      <div
        className={`${showMenu ? " absolute top-0 w-full z-10 bg-white p-2" : "hidden"}`}
      >
        <div className="flex justify-between">
          <span></span>
          <MdOutlineCancel
            className="w-5 h-5 cursor-pointer"
            onClick={handleMenuClick}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          {
            menuData.map((menuItem: any, index: number) => (
              <Fragment
                key={index}
              >
                <NavLink
                  name={menuItem.name}
                  href={menuItem.href}
                  isActive={pathname.endsWith(menuItem.href)}
                  handleClick={handleMenuClick}
                />
              </Fragment>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Index;