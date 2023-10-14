import React from "react";
import { IconProps } from "@/types/icons";

const Orders: React.FC<IconProps> = ({width, height}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      className={`${width} ${height}`}
      viewBox="0 0 50 50"
      fill="none"
    >
      <path
        d="M50 25H46.875V50H15.625V25H12.5V15.625H31.25V9.375H6.25V31.25H15.625V34.375H3.125V9.375H0V0H37.5V9.375H34.375V15.625H50V25ZM3.125 6.25H34.375V3.125H3.125V6.25ZM43.75 25H18.75V46.875H43.75V25ZM46.875 18.75H15.625V21.875H46.875V18.75ZM34.375 37.5H21.875V34.375H34.375V37.5ZM21.875 43.75V40.625H31.25V43.75H21.875Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Orders;