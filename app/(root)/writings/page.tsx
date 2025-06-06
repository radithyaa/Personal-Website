import PostCard from "@/components/Layout/PostCard";
import Title from "@/components/Layout/Title";
import { getAllPosts } from "@/libs/Blog/post";
import React from "react";

export default async function page() {
  const generatePost = getAllPosts();
  return (
    <section>
      <Title emoji="✍️">Blog</Title>
      <div className="grid grid-cols-1 gap-3">
        {generatePost.map((post) => {
          return <PostCard key={post.slug} post={post} />;
        })}
      </div>
      <p className="mt-10 text-zinc-500 text-sm font-mono text-center">
        ~ Its the End of My Blog
      </p>
    </section>
  );
}
