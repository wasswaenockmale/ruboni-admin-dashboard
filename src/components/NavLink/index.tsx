import React from "react";
import Link from "next/link";

import {NavLinkProps} from "@/types/navLink"

const Index: React.FC <NavLinkProps>= ({href, name, icon}) => {
  return (
    <Link
      href={href}
      className="flex items-center w-full gap-5 p-2 pl-3 mt-2 text-lg rounded-md font-roboto hover:text-white hover:bg-primary-200 hover:border-l-4 hover:border-l-primary-500 group"
    >
      {
        React.createElement(icon)
      }
      <h2 className="group-hover:text-whilte">{name}</h2>
    </Link>
  )
}

export default Index;