import PostCard from "@/components/Layout/PostCard";
import Title from "@/components/Layout/Title";
import { getAllPosts } from "@/libs/Blog/post";
import React from "react";
import { getTranslations, defaultLocale } from "@/libs/i18n";

export default async function page() {
  const generatePost = getAllPosts();
  const t = getTranslations(defaultLocale);

  return (
    <section>
      <Title emoji="✍️">Blog</Title>
      <div className="grid grid-cols-1 gap-3">
        {generatePost.map((post) => {
          return (
            <PostCard
              locale={defaultLocale}
              translations={t}
              key={post.slug}
              post={post}
            />
          );
        })}
      </div>
      <p className="mt-10 text-zinc-500 text-sm font-mono text-center">
        ~ {t.blog.endOfBlog}
      </p>
    </section>
  );
}
