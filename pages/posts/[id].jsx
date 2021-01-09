import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../src/components/layout/Navbar";

export default function Post({ post }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  const { title, body } = post;
  return (
    <div>
      <Navbar />
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => `/posts/${post.id}`);

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}
