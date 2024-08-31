import { tags, topQuestion } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Tag";
const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h1 className="h3-bold text-dark200_light900">Top Questions</h1>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestion.map((ques, index) => {
            return (
              <Link
                href={ques.que}
                key={index}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">{ques.que}</p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="Chevron right icon"
                  height={20}
                  width={20}
                />
              </Link>
            );
          })}
        </div>

        <div className=" mt-16">
          <h1 className="h3-bold text-dark200_light900">Popular Tags</h1>
          {tags.map((item) => {
            return <Tag key={item.name} tag={item} showcount={true} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
