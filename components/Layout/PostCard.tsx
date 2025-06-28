/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import type { Post } from "@/types";
import { formatDate } from "@/libs/Blog/formatDate";
import { type Locale } from "@/libs/i18n";

interface PostCardProps {
  post: Post;
  locale: Locale;
  translations: any;
}

export default function PostCard({ post, locale, translations }: PostCardProps) {
  const t = translations;

  return (
    <div
      key={post.slug}
      className="border overflow-hidden border-[#252529] bg-[#141417] p-5 rounded-xl"
    >
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="h-14 w-14 border border-[#252529] bg-[#1a1a1e] rounded-xl flex items-center justify-center text-2xl">
            {post.emoji}
          </div>
          <div className="mt-1">
            <div className="flex-row w-full justify-between content-between flex">
            <Link
              href={`/${locale}/writings/${post.slug}`}
              className="text-lg font-black flex gap-2"
            >
              {post.title}
            </Link>
              </div>
            <ul className="text-zinc-400 flex items-center gap-2 text-sm">
              <li>{post.readTime} {t.blog.minRead}</li>
              <li>•</li>
              <li>{formatDate(post.date)}</li>
            </ul>
          </div>
        </div>
        <Link
          className="text-nowrap max-h-7 sm:flex gap-1 sm:flex-nowrap text-sm hover:underline bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500"
          href={`/${locale}/writings/tags/${post.tags}`}
          aria-label={`Tag: ${post.tags}`}
        >
          # {post.tags}
        </Link>
      </div>
    </div>
  );
}