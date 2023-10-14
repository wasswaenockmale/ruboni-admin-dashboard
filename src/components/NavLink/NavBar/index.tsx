import React from "react";
import Link from "next/link";

import { NavLinkMenuProps } from "@/types/navLink";

const Index: React.FC<NavLinkMenuProps> = ({
  href,
  name,
  isActive,
  handleClick
  }) => {

  return (
    <button
      className={`flex items-center w-4/5 gap-5 p-2 pl-3 mt-2 text-lg rounded-md justify-center ${isActive ? "bg-primary-500 text-white" : ""}`}
      onClick={handleClick}
    >
      <Link
        href={href}
      >
        <h2
          className="font-roboto"
        >
          {name}
        </h2>
      </Link>
    </button>
  )
}

export default Index;