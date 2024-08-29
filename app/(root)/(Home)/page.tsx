// "use client";

import QuestionSearch from "@/components/shared/search/QuestionSearch";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import Link from "next/link";
import { HomeSearchFilter } from "@/constant/filter";
export default function Home() {
  return (
    <>
      <div className=" flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className=" h1-bold text-dark100_light900">All Questions</h1>
        <Link
          href="/ask-question"
          className=" flex justify-end max-sm:w-full items-center"
        >
          <Button className=" primary-gradient px-4 py-3 !text-light-900 min-h-[46px]">
            Ask Question
          </Button>
        </Link>
      </div>
      <div className=" mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <QuestionSearch iconPosition="right" />
        <Filter filters={HomeSearchFilter}
        otherClasses='min-h-[56px] sm:min-w-[170px]'
        containerClasses=" hidden max-md:flex"
        />
      </div>
    </>
  );
}
