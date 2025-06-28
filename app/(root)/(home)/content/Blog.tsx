import PostCard from "@/components/Layout/PostCard";
import Title from "@/components/Layout/Title";
import { getAllPosts } from "@/libs/Blog/post";
import Link from "next/link";
import React from "react";
import { getTranslations, defaultLocale } from "@/libs/i18n";

export default async function Blog() {
  const generatePost = getAllPosts();
  const t = getTranslations(defaultLocale);

  return (
    <section id="blogs">
      <div className="flex justify-between items-center">
        <Title emoji="">{t.blog.title}</Title>
        <Link
          href={"/writings"}
          className="text-xs text-zinc-500 -mt-5 hover:underline "
        >
          {t.blog.viewMore}
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {generatePost.length > 0 ? (
          generatePost
            .map((post) => {
              return (
                <PostCard
                  key={post.slug}
                  post={post}
                  locale={defaultLocale}
                  translations={t}
                />
              );
            })
            .slice(0, 3)
        ) : (
          <p className="text-center mt-10 -mb-2 text-zinc-500 text-sm underline">
            {t.blog.noPosts}
          </p>
        )}
      </div>
    </section>
  );
}
