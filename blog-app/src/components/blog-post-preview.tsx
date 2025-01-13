import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Prisma } from "@prisma/client";

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
  post: { title, description, createdAt },
}: BlogPostProps) => {
  return (
    <Card className="bg-card py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-2xl mt-5 w-screen">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Published on {createdAt.toISOString()}</p>
      </CardContent>
    </Card>
  );
};
