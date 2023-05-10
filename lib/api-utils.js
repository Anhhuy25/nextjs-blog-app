export async function getAllPosts() {
  const res = await fetch(`${process.env.url}/api/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "*",
    },
  });
  // console.log(res);

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
