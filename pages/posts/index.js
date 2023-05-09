import AllPosts from "@/components/posts/all-posts";
import Head from "next/head";
import { Fragment } from "react";

function AllPostsPage(props) {
  console.log(props.posts);

  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  if (!data || data.posts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data.posts },
    revalidate: 3600,
  };
}

export default AllPostsPage;
