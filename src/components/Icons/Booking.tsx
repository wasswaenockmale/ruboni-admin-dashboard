import React from 'react'
import { FaTicketAlt } from "react-icons/fa";
import { IconProps } from '@/types/icons';

const Booking:React.FC<IconProps> = ({width, height}) => {
  return (
    <FaTicketAlt
      className={`${width} ${height}`}
    />
  )
}

export default Booking