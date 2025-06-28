import PostCard from "@/components/Layout/PostCard";
import Title from "@/components/Layout/Title";
import { getAllPosts } from "@/libs/Blog/post";
import { notFound } from "next/navigation";
import React from "react";
import { getTranslations, defaultLocale } from "@/libs/i18n";

type Props = {
  params: Promise<{ tags: string }>;
};

export default async function page({ params }: Props) {
  const tags = (await params).tags;
  const posts = getAllPosts().filter((post) => post.tags.includes(tags));
  const t = getTranslations(defaultLocale);

  if (!posts) {
    notFound();
  }

  return (
    <section>
      <Title emoji="#">
        {t.blog.blogTopic}{" "}
        <div className="ml-2 text-xl bg-[#18181b] border border-[#252529] text-zinc-500 px-1 rounded font-normal">
          # {tags}
        </div>
      </Title>
      <div className="grid grid-cols-1 gap-3">
        {posts.map((post) => {
          return (
            <PostCard
              key={post.slug}
              post={post}
              locale={defaultLocale}
              translations={t}
            />
          );
        })}
      </div>
      <p className="mt-16 text-zinc-500 text-sm font-mono text-center">
        ~ {t.blog.endOfTag} {tags}
      </p>
    </section>
  );
}
