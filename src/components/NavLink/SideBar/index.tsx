import React from "react";
import Link from "next/link";

import { NavLinkProps } from "@/types/navLink";

const Index: React.FC<NavLinkProps> = ({
  href,
  name,
  icon,
  isActive,
  collapsed,
}) => {
  
  return (
    <Link
      href={href}
      className={`
      flex items-center w-full gap-5 p-2 pl-3 mt-2 text-lg rounded-md font-hind
      ${isActive ? " bg-primary-500 text-white hover:bg-primary-700  border-l-8 border-l-primary-700 hover:border-l-primary-500" :
          " text-primary-500 bg-primary-50 hover:text-white hover:bg-primary-400 hover:border-l-8 hover:border-l-primary-500"}`}
    >
      {
        React.createElement(icon, {
          height: "h-6",
          width: "w-6"
        })
      }
      <h2
        className={`group-hover:text-whilte ${collapsed ? "hidden" : ""}`}
      >
        {name}
      </h2>
    </Link>
  )
}

export default Index;