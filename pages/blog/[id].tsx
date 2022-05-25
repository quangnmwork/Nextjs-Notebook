import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { getPost } from "../../services/post";

const DynamicImports = dynamic(() => import("./../../components/button"));

const BlogPage = () => {
  return (
    <div>
      <DynamicImports />
      <p>Blog Page</p>
    </div>
  );
};

export async function getStaticProps(context: GetStaticProps) {
  const post = getPost();
  return {
    props: {
      post,
    },
  };
}
export async function getStaticPaths() {
  const posts = getPost();
  const slugs = posts.map((post) => post.id);

  return {
    paths: slugs.map((slug) => ({ params: { id: slug.toString() } })),
    fallback: true,
  };
}

export default BlogPage;
