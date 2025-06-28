import PostCard from "@/components/Layout/PostCard";
import Title from "@/components/Layout/Title";
import { getAllPosts } from "@/libs/Blog/post";
import Link from "next/link";
import React from "react";
import { locales } from "@/libs/i18n";
import { translations } from "@/libs/i18n/translations";

export default async function Blog() {
  const generatePost = getAllPosts();

  return (
    <section id="blogs">
      <div className="flex justify-between items-center">
        <Title emoji="">Latest Blogs</Title>
        <Link
          
          href={"/writings"}
          className="text-xs text-zinc-500 -mt-5 hover:underline "
        >
          view more
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {generatePost.length > 0 ? (
          generatePost
            .map((post) => {
              return <PostCard key={post.slug} post={post} locale={locales[0]} translations={translations}/>;
            })
            .slice(0, 3)
        ) : (
          <p className="text-center mt-10 -mb-2 text-zinc-500 text-sm underline">The author has no posts yet</p>
        )}
      </div>
    </section>
  );
}
