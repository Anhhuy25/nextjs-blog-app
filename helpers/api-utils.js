export async function getAllPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  return data;
}

export async function getPost(id) {
  const { posts } = await getAllPosts();

  const findPost = posts.find((post) => post._id === id);

  return findPost;
}
