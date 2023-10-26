import React, { Suspense } from "react";
import { LayoutProps } from "@/types/layoutProps";
import NavBar from "@/components/NavBar"
import SideBar from "@/components/SideBar"
import Loading from "@/components/Loading/Loading";

const Index: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full bg-secondary-50">
      <SideBar />
      <main className="w-full px-1 py-1">
        <NavBar />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </main>
    </div>
  );
}

export default Index;