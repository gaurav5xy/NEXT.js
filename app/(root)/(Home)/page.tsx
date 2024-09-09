// "use client";

import QuestionSearch from "@/components/shared/search/QuestionSearch";
import { Button } from "@/components/ui/button";
import Filters from "@/components/shared/Filters";
import Link from "next/link";
import { HomeSearchFilter } from "@/constant/filter";
import HomeFilter from "@/components/Home/HomeFilter";
import NoQuestion from "@/components/NoQuestion";
import QuestionCard from "@/components/cards/QuestionCard";
import { getQuestion } from "@/lib/actions/question.action";


export default async function Home() {
  const result = await getQuestion({})
  
  const questions = [
    {
      id: 1,
      title: "How to center a div",
      tags: [
        { id: 1, name: "css", count: 12 },
        { id: 2, name: "sql", count: 10 },
      ],
      auther: {
        id: 1,
        name: "John Doe",
      },
      upvotes: "10",
      views: "1000000",
      answer: "2",
      date: new Date ("2024-07-15 14:30:00"), // Random date and time
    },
    {
      id: 2,
      title: "How to align items in flexbox",
      tags: [
        { id: 1, name: "css", count: 15 },
        { id: 2, name: "flexbox", count: 8 },
      ],
      auther: {
        id: 2,
        name: "Jane Doe",
      },
      upvotes: "25",
      views: "200",
      answer: "5",
      date: new Date ("2022-08-20 09:45:00"), // Random date and time
    },
    {
      id: 3,
      title: "Understanding JavaScript closures",
      tags: [
        { id: 1, name: "javascript", count: 20 },
        { id: 2, name: "closures", count: 5 },
      ],
      auther: {
        id: 3,
        name: "Alice Smith",
      },
      upvotes: "50",
      views: "350",
      answer: "10",
      date: new Date("2021-06-05 17:00:00"), // Random date and time
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link
          href="/ask-question"
          className="flex justify-end max-sm:w-full items-center"
        >
          <Button className="primary-gradient px-4 py-3 !text-light-900 min-h-[46px]">
            Ask Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <QuestionSearch iconPosition="right" />
        <Filters
          filters={HomeSearchFilter}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilter />

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length >= 1 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question.id}
              id={question.id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              views={question.views}
              answer={question.answer}
              upvotes={question.upvotes}
              createdAt={question.date} // Passes the random date and time
            />
          ))
        ) : (
          <NoQuestion
            title="There no question to show"
            description="Be the first to break the silence! Ask a Question and kickstart the discussion. Your query could be the next big thing others learn from. Get involved!"
            link="/ask-question"
            LinkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
