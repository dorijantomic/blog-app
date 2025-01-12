import { PrismaClient } from "@prisma/client";
import { hash } from "argon2";

const prisma = new PrismaClient();

const users = [
  {
    email: "dorijantomic@outlook.com",
    password: "password1",
    name: "User One",
  },
  { email: "ivanacosic@outlook.com", password: "password2", name: "User Two" },
];

const posts = [
  { title: "First Post", content: "This is the first post", published: true },
  {
    title: "Second Post",
    content: "This is the second post",
    published: false,
  },
];

async function seed() {
  const createdUsers = await Promise.all(
    users.map(async (user) => {
      const passwordHash = await hash(user.password);
      return prisma.user.create({
        data: {
          email: user.email,
          name: user.name,
          passwordHash,
        },
      });
    })
  );

  for (const post of posts) {
    await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        published: post.published,
        authorId: createdUsers[0].id,
        authorName: createdUsers[0].name || "Unknown",
        authorEmail: createdUsers[0].email,
      },
    });
  }
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
