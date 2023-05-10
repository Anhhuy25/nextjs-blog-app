import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getAllPosts } from "@/lib/api-utils";
import Head from "next/head";
import { Fragment } from "react";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Huy&apos;s Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
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
