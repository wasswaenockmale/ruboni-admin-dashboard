import React, { Fragment } from 'react'
import { menuData } from "@/utils/menuData";
import NavLink from "@/components/NavLink/NavBar"
import { MdOutlineCancel } from "react-icons/md"

interface MenuProps{
  pathname: string,
  showMenu: boolean,
  handleMenuClick: ()=>void
}
function Menu({pathname, handleMenuClick, showMenu}:MenuProps) {
  return (
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
  );
}

export default Menu