import Link from "next/link";
import { Layout, SEO } from "../../src/components/layout";

function Posts({ posts }) {
  return (
    <Layout>
      <SEO title="Posts"></SEO>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${encodeURIComponent(post.id)}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Posts;

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  // Pass post data to the page via props
  return { props: { posts } };
}
