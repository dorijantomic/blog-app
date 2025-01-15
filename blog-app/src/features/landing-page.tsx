import { getPosts } from "@/app/api/get-posts";
import { BlogPostPreview } from "@/components/blog-post-preview";
import React from "react";

const LandingPage = async () => {
  const posts = await getPosts();
  return (
    <div className="flex flex-col items-center">
      {posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};

export { LandingPage };
