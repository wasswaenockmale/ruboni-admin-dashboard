"use client"

import React, { useState } from "react";
import NavLink from "@/components/NavLink/SideBar"
import { menuData } from "@/utils/menuData";
import { usePathname } from "next/navigation";

const Index: React.FC = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  
  const handleCollapseClick = () => {
    setCollapsed(!collapsed);
  }
  
  return (
    <aside className={`hidden h-screen bg-white lg:flex lg:flex-col ${collapsed ? 'w-fit' : 'w-1/6'}`}>
      <nav className="h-full border-[0.1px] font-poppins w-full flex flex-col">
        <div
          className={`${collapsed ? "hidden" : "flex flex-col items-start p-3 px-5 text-center cursor-pointer text-primary-500 "}`}
          onClick={(event) => {
            event.preventDefault();
            handleCollapseClick()
          }}
        >
          <h1 className={`text-lg uppercase font-poppins`}>Ruboni Community</h1>
        </div>
        <div
          className={`${collapsed ? "flex items-center justify-center text-lg border rounded-full w-14 h-14 border-primary-700 font-poppins cursor-pointer self-center mt-1" : "hidden"}`}
          onClick={(event) => {
            event.preventDefault();
            handleCollapseClick()
          }}
        >
          <h1 className=" font-poppins text-primary-500">RC</h1>
        </div>
        {/* sidebar buttons */}
        <div className="w-full px-5 mt-10 text-primary-500">
          {
            menuData.map((item: any, index: number) => (
              <NavLink
                key={index}
                href={item.href}
                icon={item.icon}
                name={!collapsed ? item.name : ""}
                isActive={pathname.endsWith(item.href)}
                collapsed={collapsed}
              />

            ))
          }
        </div>
      </nav>
    </aside>
  )
}

export default Index;