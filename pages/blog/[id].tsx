import { GetStaticProps } from "next";
import React from "react";
import { getPost } from "../../services/post";

const BlogPage = () => {
  return <div>BlogPage</div>;
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
  console.log(slugs);
  return {
    paths: slugs.map((slug) => ({ params: { id: slug.toString() } })),
    fallback: true,
  };
}

export default BlogPage;
