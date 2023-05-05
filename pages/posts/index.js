import AllPosts from "@/components/posts/all-posts";
import React, { Fragment } from "react";
import { DUMMY_DATA } from "..";
import Head from "next/head";

function AllPostsPage() {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={DUMMY_DATA} />;
    </Fragment>
  );
}

export default AllPostsPage;
