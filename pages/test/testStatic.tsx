import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getPost } from "../../services/post";
import { Post } from "../../types";
const fetchData = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    method: "GET",
  });
  const data = await res.json();
  return data;
};
const TestPage = (props: any) => {
  console.log(props.data);

  return (
    <>
      {props.data.map((item: Post, index: number) => (
        <p key={index}>{item.title}</p>
      ))}
      <Link href={"/test/testStatic"}>
        <a>Reload</a>
      </Link>
    </>
  );
};
export async function getStaticProps() {
  const data = getPost();

  return {
    props: {
      data,
    },
  };
}
export default TestPage;
