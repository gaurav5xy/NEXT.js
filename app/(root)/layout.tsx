"use client";
import Navbar from "@/components/shared/Navbar/Navbar";
import Theme from "@/components/shared/Navbar/Theme";
import { ThemeProvider } from "@/context/ThemeProvider";
import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";
import React from "react";
import RightSidebar from "@/components/shared/sidebar/RightSidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <main className="background-light850_dark100 relative">
        <Navbar />
        <div className="flex">
          <LeftSidebar />
          <section className=" flex min-h-screen flex-1 flex-colpx-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
            <div className=" mx-auto w-full max-w-5xl">{children}</div>
          </section>
          <RightSidebar/>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default Layout;
