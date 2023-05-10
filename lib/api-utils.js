import axios from "axios";

export async function getAllPosts() {
  const res = await axios.get(`${process.env.URL}/api/posts`);
  console.log(res);

  // if (res.status >= 400 && res.status < 600) {
  //   throw new Error("Bad response from server");
  // }

  // const data = await res.json();

  return res.data;
}

export async function getPost(id) {
  const { posts } = await getAllPosts();

  const findPost = posts.find((post) => post._id === id);

  return findPost;
}
