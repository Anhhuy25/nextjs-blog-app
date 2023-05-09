import PostCreate from "@/components/posts/post-create/post-create";
import PostContent from "@/components/posts/post-detail/post-content";
import { getAllPosts, getPost } from "@/helpers/api-utils";
import { Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function SlugPage(props) {
  const router = useRouter();

  let component;

  if (router.query.slug === "create-post") {
    component = <PostCreate />;
  } else if (!router.query.slug) {
    component = (
      <Text align="center" m="1">
        Loading...
      </Text>
    );
  } else {
    component = <PostContent post={props.post} />;
  }

  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.abstract} />
      </Head>
      {component}
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const id = context.params.slug;
  const post = await getPost(id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  const ids = data.posts.map((post) => ({ params: { slug: post._id } }));

  return {
    paths: ids,
    fallback: false,
  };
}
