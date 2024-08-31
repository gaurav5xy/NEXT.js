import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HomeSearchFilter } from "@/constant/filter";

interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses: string;
  containerClasses: string;
}
const Filters = ({ filters, otherClasses, containerClasses }: Props) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5 focus:outline-none outline-none`}>
          <div className=" line-clamp-1 flex-1 text-left">
          <SelectValue placeholder="Theme" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {HomeSearchFilter.map((item)=>{
              return(<SelectItem key={item.value} value={item.value}>{item.name}</SelectItem>)
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
