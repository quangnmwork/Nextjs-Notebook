import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";

import NestedLayout from "./../../components/layout/NestedLayout";
import { getPost } from "../../services/post";
import Layout from "../../components/layout/Layout";

const DynamicImports = dynamic(() => import("./../../components/Button"));

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

BlogPage.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default BlogPage;
