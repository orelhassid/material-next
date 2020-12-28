import { Button, useTheme } from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Layout, SEO, Header } from "./components/layout";
import Navbar from "./components/layout/Navbar";

export default function Home(props) {
  const theme = useTheme();
  console.log("theme", theme);
  return (
    <Layout>
      <SEO />
      <Header title="Home Page" subtitle="Welcome!" />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
      // context,
    },
  };
}
