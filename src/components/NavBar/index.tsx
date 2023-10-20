"use client"

import React from "react";

import { GrMenu } from "react-icons/gr";
import { BiSearch } from "react-icons/bi"

import { usePathname } from "next/navigation";

import NotificationIcon from "./NotificationIcon/NotificationIcon";
import ProfileSection from "./ProfileSection/ProfileSection";
import ProfileCard from "./ProfileCard/ProfileCard";
import Menu from "./MenuDisplay/Menu";
import NotificationModal from "../Notifications/NotificationModal";

const Index: React.FC = () => {
  
  const pathname = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);
  const [showProfileCard, setShowProfileCard] = React.useState(false);
  
  const handleNotificationClick = () => {
    
  }

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  const handleProfileCard = () => {
    setShowProfileCard(!showProfileCard);
  }
  
  return (
    <div className={`relative flex items-center justify-between h-14 rounded-md border ${showMenu ? "" : "p-1 pl-1"}`}>
      <div className="flex justify-between w-full">
        <div className="items-center hidden pl-1 bg-white rounded-md md:flex lg:w-1/4 md:w-2/5" >
          <BiSearch
            className="w-5 h-5"
          />
          <input
            type="text"
            name="search"
            className="w-full p-1 pl-5 outline-none"
            placeholder="Search for ..."
          />
        </div>
        <GrMenu
          className="w-8 h-8 cursor-pointer lg:hidden"
          onClick={handleMenuClick}
        />
        <div className="flex justify-between cursor-pointer lg:w-1/5 md:w-2/6">
          <NotificationIcon />
          <ProfileSection
            handleShowProfileCard={handleProfileCard}
          />
        </div>
      </div>
      {/* Menu display on mobile view  */}
      <Menu
        pathname={pathname}
        showMenu={showMenu}
        handleMenuClick={handleMenuClick}
      />

      {/* Profile card  */}
      <ProfileCard
        showCard={showProfileCard}
        handleCardDisplay={handleProfileCard}
      />
    </div>
  );
}

export default Index;