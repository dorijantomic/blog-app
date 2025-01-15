import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Prisma } from "@prisma/client";
import Image from "next/image";

interface BlogPostProps {
  post: Prisma.PostGetPayload<{
    include: {
      author: {
        select: {
          name: true;
          id: true;
        };
      };
    };
  }>;
}

export const BlogPostPreview = ({
  post: { title, description, createdAt, content },
}: BlogPostProps) => {
  const imgMatch = content?.match(
    /<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/
  );

  const imgSrc = imgMatch?.[1];
  const imgAlt = imgMatch?.[2];
  return (
    <Card className="max-w-sm rounded overflow-hidden shadow-lg m-5">
      <CardHeader>
        <CardTitle className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </CardTitle>
        {imgSrc && imgAlt && (
          <Image src={imgSrc} alt={imgAlt} width={600} height={600} />
        )}
      </CardHeader>
      <CardDescription className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </CardDescription>
      <CardContent>
        <p>Published on {createdAt.toISOString()}</p>
      </CardContent>
    </Card>
  );
};
