import { Text } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import type { Blog } from "src/types/blog";

type Props = {
  blogs: Blog[];
};

const BlogSection = ({ blogs }: Props) => {
  return (
    <section>
      <Text h2>Blog</Text>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`} passHref>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogSection;
