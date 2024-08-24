"use client";
import { useTheme } from "@/context/ThemeProvider";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { themes } from "@/constant";

const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <main>
      <NavigationMenu className=" relative border-none bg-transparent shadow-none ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
              {mode === "dark" ? (
                <Image
                  src="/assets/icons/sun.svg"
                  alt="sun"
                  width={20}
                  height={20}
                  className="active-theme"
                />
              ) : (
                <Image
                  src="/assets/icons/moon.svg"
                  alt="moon"
                  width={20}
                  height={20}
                  className="active-theme"
                />
              )}
            </NavigationMenuTrigger>
            <NavigationMenuContent className=" absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
              {themes.map((item) => (
                <NavigationMenuItem
                  className=" list-none"
                  key={item.value}
                  onClick={() => {}}
                >
                  <Image
                    src={item.icon}
                    alt={item.value}
                    width={16}
                    height={16}
                    className={`${mode === item.value && "active-theme"}`}
                  />
                  <p className={`body-semibold text-light-500
                    ${mode === item.value ? 'text-primary-500' : 
                    'text-dark100_light900'}`}>{item.label}</p>
                </NavigationMenuItem>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </main>
  );
};

export default Theme;
