import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
  title: "Getting Started NextJS",
  image: "getting-started-nextjs.png",
  content: "# This is the first post",
  date: "2023-05-03",
  slug: "getting-started-nextjs1",
};

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <div>{post.abstract}</div>
      <div dangerouslySetInnerHTML={{ __html: post.description }}></div>
    </article>
  );
}
