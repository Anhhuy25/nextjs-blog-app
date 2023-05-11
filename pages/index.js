import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getAllPosts } from "@/lib/api-utils";
import Head from "next/head";
import { Fragment } from "react";

export const DUMMY_POSTS = [
  {
    _id: "1",
    title: "String 1",
    abstract: "string 1",
    description: "string 1",
    image:
      "https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png",
  },
  {
    _id: "2",
    title: "String 2",
    abstract: "string 2",
    description: "string 2",
    image:
      "https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png",
  },
];

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
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

// export async function getStaticProps() {
//   const data = await getAllPosts();

//   if (!data || data.posts.length === 0) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { posts: data.posts },
//     revalidate: 3600,
//   };
// }
