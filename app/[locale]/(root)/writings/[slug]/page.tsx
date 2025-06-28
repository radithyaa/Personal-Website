import { formatDate } from "@/libs/Blog/formatDate";
import {
  components,
  getAllPosts,
  getPostBySlug,
  mdxOptions,
} from "@/libs/Blog/post";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { getTranslations, type Locale } from "@/libs/i18n";


type Props = {
  params: { slug: string; locale: string };
};

export function generateStaticParams() {
  const posts = getAllPosts();
  const locales = ['en', 'id'];
  
  return locales.flatMap(locale => 
    posts.map((blog) => ({
      locale,
      slug: blog.slug,
    }))
  );
}

export default async function BlogPost({ params }: Props) {
  const { slug, locale } = await params;
  
  if (!params || !slug) {
    notFound();
  }
  
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const t = getTranslations(locale as Locale) ?? getTranslations('en');


  return (
    <section>
      <header>
        <ul className="flex gap-3 text-sm">
          <li>
            <Link href={`/${locale}`} className="hover:underline">
              . .
            </Link>
          </li>
          /
          <li>
            <Link href={`/${locale}/writings`} className="hover:underline">
              {t.blogPost.writings}
            </Link>
          </li>
          /
        </ul>
        <h1 className="text-5xl font-bold mb-5">{post.title}</h1>
        <hr className="mt-20 mb-5 border-t border-t-[#252529]" />
        <div className="flex justify-between items-center mx-2">
          <Link
            className="text-sm hover:underline bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500"
            href={`/${locale}/writings/tags/${post.tags}`}
          >
            # {post.tags}
          </Link>{" "}
          <ul className="flex text-xs gap-2">
            <li>{formatDate(post.date)}</li>·<li>{post.readTime} {t.blog.minRead}</li>
          </ul>
        </div>
        <hr className="mt-5 mb-20 border-t border-t-[#252529]" />
      </header>
      <article className="prose lg:prose-base prose-invert">
        <MDXRemote
          source={(post).content}
          options={mdxOptions}
          components={components}
        />
      </article>
      <p className="mt-16 text-zinc-500 text-sm font-mono text-center">
        ~ {t.blog.endOfPost}{" "}
        <span className="text-violet-300 underline">{post.title}</span> ~
      </p>
    </section>
  );
}