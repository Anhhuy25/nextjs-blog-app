import PostContent from "@/components/posts/post-detail/post-content";
import { Fragment } from "react";

export default function SlugPage() {
  return (
    <Fragment>
      {/* <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head> */}
      <PostContent />;
    </Fragment>
  );
}
