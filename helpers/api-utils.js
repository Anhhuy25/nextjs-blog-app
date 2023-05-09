export async function getAllPosts() {
  try {
    const res = await fetch(`${process.env.url}/api/posts`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(id) {
  const { posts } = await getAllPosts();

  const findPost = posts.find((post) => post._id === id);

  return findPost;
}
