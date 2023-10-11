import React from "react";
import { LayoutProps } from "@/types/layoutProps";
import NavBar from "@/components/NavBar"
import SideBar from "@/components/SideBar"

const Index: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex w-screen bg-secondary-50">
      <SideBar />
      <main className="w-full px-1 py-1">
        <NavBar />
        {children}
      </main>
    </div>
  )
}

export default Index;