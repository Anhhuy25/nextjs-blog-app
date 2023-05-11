import PostCreate from "@/components/posts/post-create/post-create";
import PostContent from "@/components/posts/post-detail/post-content";
import { getAllPosts, getPost } from "@/lib/api-utils";
import { Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

const post = {
  _id: "1",
  title: "String 1",
  abstract: "string 1",
  description: "string 1",
  image:
    "https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png",
};

export default function SlugPage(props) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Text align="center" m="1">
        Loading...
      </Text>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{post.title || "Title post"}</title>
        <meta name="description" content={post.abstract || "Abstract post"} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

// export async function getStaticPaths() {
//   const data = await getAllPosts();
//   console.log("🚀 ~ file: [slug].js:37 ~ getStaticPaths ~ data:", data);

//   if (!data) {
//     return {
//       paths: [],
//       fallback: true,
//     };
//   }

//   const ids = data.posts.map((post) => ({ params: { slug: post._id } }));

//   return {
//     paths: ids,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const id = context.params.slug;
//   const post = await getPost(id);
//   console.log("🚀 ~ file: [slug].js:56 ~ getStaticProps ~ post:", post);

//   if (!post) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { post },
//     revalidate: 3600,
//   };
// }
