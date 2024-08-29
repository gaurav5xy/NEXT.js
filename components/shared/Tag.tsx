import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Define the structure of the tag object
interface Tag {
  name: string;
  count: number;
}

interface Props {
  tag: Tag;
}

const Tag = ({ tag }: Props) => {
  return (
    <div className="mt-7 flex flex-col gap-4">
      <Link
        href={tag.name}
        key={tag.name}
        className="flex justify-between gap-2 cursor-pointer"
      >
        <Badge
          variant="outline"
          className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase"
        >
          {tag.name}
        </Badge>
        <p className="body-medium text-dark500_light700">{tag.count}</p>
      </Link>
    </div>
  );
};

export default Tag;
