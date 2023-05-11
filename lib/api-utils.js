export async function getAllPosts() {
  console.log(process.env.NEXT_PUBLIC_URL, "env");
  // const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/posts`);
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`);
  console.log(res, "response in api-utils");

  // if (res.status >= 400 && res.status < 600) {
  //   throw new Error("Bad response from server");
  // }

  const data = await res.json();

  return data;
}

export async function getPost(id) {
  const { posts } = await getAllPosts();

  const findPost = posts.find((post) => post._id === id);

  return findPost;
}
