import { prisma } from "@/lib/prisma";

export const getPosts = async () => {
  return await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });
};
