/* eslint-disable @typescript-eslint/no-explicit-any */

import PostCard from "@/components/Layout/PostCard";
import Title from "@/components/Layout/Title";
import { getAllPosts } from "@/libs/Blog/post";
import Link from "next/link";
import React from "react";
import { type Locale } from "@/libs/i18n";

interface BlogProps {
  locale: Locale;
  translations: any;
}

export default async function Blog({ locale, translations }: BlogProps) {
  const generatePost = getAllPosts();
  const t = translations;

  return (
    <section id="blogs">
      <div className="flex justify-between items-center">
        <Title emoji="">{t.blog.title}</Title>
        <Link
          href={`/${locale}/writings`}
          className="text-xs text-zinc-500 -mt-5 hover:underline "
        >
          {t.blog.viewMore}
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {generatePost.length > 0 ? (
          generatePost
            .map((post) => {
              return <PostCard key={post.slug} post={post} locale={locale} translations={t} />;
            })
            .slice(0, 3)
        ) : (
          <p className="text-center mt-10 -mb-2 text-zinc-500 text-sm underline">{t.blog.noPosts}</p>
        )}
      </div>
    </section>
  );
}