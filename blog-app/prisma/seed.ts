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
  {
    title: "React 19",
    description: "React 19 is out now! Check out the new features.",
    // JSON strigified content including images, links, etc. of react 19 being released blog post
    content: `
          <p>React 19 is out now! Check out the new features.</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>  
            <li>Feature 3</li>
            </ul>
            <p>Here's a link to the <a href="https://reactjs.org/blog/2022/02/23/react-v19.0.0.html">React 19 release notes</a>.</p>
            `,
    published: true,
  },
  {
    title: "Omuamua - The First Interstellar Object",
    // JSON strigified content including images, links, etc.
    content: `<p>I love exploring the outdoors. Here’s a picture from my last hike:</p>
          <img src="https://picsum.photos/600/600" alt="Nature Hike" />
          <p>It was such a beautiful view!</p>`,
    published: true,
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
