import { useTheme } from "@material-ui/core";
import { useContext } from "react";
import { Layout, SEO, Header } from "../src/components/layout";
import { AuthContext } from "../src/contexts/AuthContext";
export default function Home(props) {
  const theme = useTheme();
  console.log("theme", theme);
  const { user } = useContext(AuthContext);
  return (
    <Layout>
      <SEO />
      <Header title="Home Page" subtitle={`Welcome ${user.name}`} />
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
