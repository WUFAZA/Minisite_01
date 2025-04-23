import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";

import { Link as NextViewTransition } from "next-view-transitions";
import React from "react";

interface PostProps {
  category: string;
}

export const Posts = ({ category }: PostProps) => {
  const posts = getPosts(category).sort((a, b) => {
    return new Date(b.time.created).getTime() - new Date(a.time.created).getTime();
  });

  const Seperator = () => <div className="border-border border-t" />;

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-col">
      <NextViewTransition href={`/${category}`} className="flex justify-between hover:opacity-80 transition-opacity">
        <h2 className="py-2 text-muted capitalize font-medium">
          {category} {posts.length > 0 && `(${posts.length})`}
        </h2>
      </NextViewTransition>

      {posts.map((post) => {
        return (
          <React.Fragment key={post.slug}>
            <Seperator />
            <NextViewTransition 
              href={`/${category}/${post.slug}`} 
              className="group flex w-full justify-between py-3 hover:bg-gray-2 px-2 -mx-2 rounded-md transition-all"
            >
              <p className="group-hover:text-pink-11 transition-colors">{post.title}</p>
              <p className="mt-0 text-muted text-sm">{formatter.date(new Date(post.time.created))}</p>
            </NextViewTransition>
          </React.Fragment>
        );
      })}
    </div>
  );
};
