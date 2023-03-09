import { GetServerSideProps } from "next";
import type { Blog } from "src/types/blog";

import { client } from "../../libs/client";

type Props = {
  blog: Blog;
};

export default function Article({ blog }: Props) {
  return (
    <>
      <img
        className="object-cover w-full shadow-sm h-full"
        src={blog.eyecatch.url}
        alt=""
        width={blog.eyecatch.width}
        height={blog.eyecatch.height}
        decoding="async"
      />
      {blog.title}
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      ></div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data: Blog = await client.get({
    endpoint: "blogs",
    contentId: idExceptArray,
  });

  return {
    props: {
      blog: data,
    },
  };
};
