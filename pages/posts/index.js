import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/api-utils";
import Head from "next/head";
import { Fragment } from "react";

function AllPostsPage(props) {
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
  const data = await getAllPosts();

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
