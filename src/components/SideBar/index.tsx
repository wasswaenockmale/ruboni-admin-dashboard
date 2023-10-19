"use client"

import React from "react";
import Image from "next/image";
import NavLink from "@/components/NavLink/SideBar"
import Avator from "../../../public/images/Avator.png"
import { menuData } from "@/utils/menuData";
import {Logout} from "@/components/Icons/index"
import { usePathname } from "next/navigation";

const Index: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="hidden w-1/6 h-screen bg-white lg:flex lg:flex-col">
      <div className="flex flex-col items-start p-3 px-5 text-center text-primary-500">
        {/* <Image
          src={Avator}
          alt="user-image" 
          width={50}
          height={50}
          priority
          quality={80}
        />
        <h2 className="text-base ">Administrator</h2>
        <h6 className="text-sm ">administrator@gmail.com</h6> */}
        <h1 className="text-lg uppercase font-roboto">Ruboni Community</h1>
      </div>
      
      {/* sidebar buttons */}
      <div className="w-full px-5 mt-20 text-primary-500">
        {
          menuData.map((item: any, index: number) => (
            <NavLink
              key={index}
              href={item.href}
              icon={item.icon}
              name={item.name}
              isActive={pathname.endsWith(item.href)}
            />
            
          ))
        }
      </div>
      
      {/* <div className="flex w-4/5 gap-5 p-1 pl-3 m-auto rounded-sm text-primary-500 font-roboto">
        <Logout
          width={"w-6"}
          height={"h-6"}
        />
        <h2>Logout</h2>
      </div> */}
    </div>
  )
}

export default Index;