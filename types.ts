export type Post = {
  slug: string;
  title: string;
  date: string;
  emoji: string;
  content: string;
  readTime: number;
  tags: string[];
};

export type Locale = "en" | "id";

export type Translations = {
  nav: {
    home: string;
    about: string;
    projects: string;
    blogs: string;
    menu: string;
  };
  home: {
    name: string;
    role: string;
    description: string;
  };
  about: {
    title: string;
    bio1: string;
    bio2: string;
    technologies: string[];
  };
  projects: {
    title: string;
    showMore: string;
    showLess: string;
    preview: string;
    items: Array<{
      label: string;
      summary: string;
      tags: string[];
    }>;
  };
  blog: {
    title: string;
    viewMore: string;
    noPosts: string;
    minRead: string;
    endOfBlog: string;
    endOfPost: string;
    endOfTag: string;
    blogTopic: string;
  };
  footer: {
    copyright: string;
  };
  notFound: {
    title: string;
    message: string;
    backHome: string;
  };
  blogPost: {
    writings: string;
  };
};
