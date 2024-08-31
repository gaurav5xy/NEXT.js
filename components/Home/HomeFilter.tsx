import { HomeSearchFilter } from "@/constant/filter";
import React from "react";
import { Button } from "../ui/button";

const HomeFilter = () => {
  const active = "newest";
  return (
    <div className=" mt-10 hidden flex-wrap gap-3 md:flex">
      {HomeSearchFilter.map((item) => (
        <Button
          key={item.value}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none 
                    ${
                      active === item.value
                        ? " text-primary-500 bg-primary-100"
                        : " bg-light-800 text-light-500"
                    }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
