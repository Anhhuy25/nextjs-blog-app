import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import Head from "next/head";
import { Fragment } from "react";

export const DUMMY_DATA = [
  {
    title: "Getting Started NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "This is section talk about basis of NextJS",
    date: "2023-05-03",
    slug: "getting-started-nextjs",
  },
  {
    title: "Getting Started NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "This is section talk about basis of NextJS",
    date: "2023-05-03",
    slug: "getting-started-nextjs2",
  },
  {
    title: "Getting Started NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "This is section talk about basis of NextJS",
    date: "2023-05-03",
    slug: "getting-started-nextjs3",
  },
  {
    title: "Getting Started NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "This is section talk about basis of NextJS",
    date: "2023-05-03",
    slug: "getting-started-nextjs4",
  },
];

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Huy&apos; Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={DUMMY_DATA} />
    </Fragment>
  );
}
