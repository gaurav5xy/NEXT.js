import Tag from "../shared/Tag";
import Link from "next/link";
import React from "react";
import Matric from "../Matric";
import { getTimeStamp, formatNumber } from "@/lib/utils";

interface TagType {
  id: number;
  name: string;
  count: number;
}
interface Author {
  id: number;
  name: string;
}
interface QuestionCardProps {
  id: number;
  title: string;
  tags: TagType[];
  author: Author;
  views: string;
  answer: string;
  upvotes: string;
  createdAt: Date;
}

const QuestionCard = ({
  id,
  title,
  tags,
  author,
  views,
  answer,
  upvotes,
  createdAt,
}: QuestionCardProps) => {
  
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className=" subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={`/question/${id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} showcount={false} />
        ))}
      </div>

      <div className=" flex-between mt-6 w-full flex-wrap gap-3">
        <Matric
          imgURL="/assets/icons/avatar.svg"
          alt="User"
          value={author?.name}
          title={`| asked ${getTimeStamp(createdAt)}`}
          href={`/profile/${author?.id}`}
          isAuthor={true}
          textStyle="body-medium text-dark400_light700"
        />

        <Matric
          imgURL="/assets/icons/like.svg"
          alt="Upvotes"
          value={formatNumber(upvotes)}
          title="Votes"
          textStyle="small-medium text-dark400_light800"
        />

        <Matric
          imgURL="/assets/icons/like.svg"
          alt="message"
          value={formatNumber(answer)}
          title="Answer"
          textStyle="small-medium text-dark400_light800"
        />

        <Matric
          imgURL="/assets/icons/like.svg"
          alt="eye"
          value={formatNumber(views)}
          title="Views"
          textStyle="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;
