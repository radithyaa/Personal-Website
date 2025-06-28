import PostCard from "@/components/Layout/PostCard";
import Title from "@/components/Layout/Title";
import { getAllPosts } from "@/libs/Blog/post";
import React from "react";
import { getTranslations, type Locale } from "@/libs/i18n";

export default async function Page({ 
  params 
}: { 
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const generatePost = getAllPosts();
  const t = getTranslations(locale as Locale);

  return (
    <section>
      <Title emoji="✍️">Blog</Title>
      <div className="grid grid-cols-1 gap-3">
        {generatePost.map((post) => {
          return <PostCard key={post.slug} post={post} locale={locale as Locale} translations={t} />;
        })}
      </div>
      <p className="mt-10 text-zinc-500 text-sm font-mono text-center">
        ~ {t.blog.endOfBlog}
      </p>
    </section>
  );
}