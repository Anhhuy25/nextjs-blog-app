import { MongoClient } from "mongodb";
import { connectionString } from "../contact";

async function handler(req, res) {
  let client;

  try {
    client = await MongoClient.connect(connectionString);
  } catch (error) {
    res.status(500).json({ code: "not_connect_database", ok: false });
    return;
  }

  if (req.method === "POST") {
    const { title, abstract, description } = req.body;

    if (
      !title ||
      title.trim() === "" ||
      !abstract ||
      abstract.trim() === "" ||
      !description ||
      description.trim() === ""
    ) {
      res.status(422).json({ code: "invalid_input", ok: false });
      return;
    }

    const newPost = {
      title,
      abstract,
      description,
      image:
        "https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png",
    };

    const db = client.db(process.env.DB_DATABASE);

    try {
      await db.collection("posts").insertOne(newPost);
    } catch (error) {
      client.close();
      res.status(500).json({ code: "store_post_failed" });
      return;
    }

    client.close();

    res.status(201).json({
      code: "success_stored_post",
      post: newPost,
      ok: true,
    });
  }

  if (req.method === "GET") {
    const db = client.db(process.env.DB_DATABASE);

    try {
      const result = await db.collection("posts").find({}).toArray();
      client.close();

      res.status(201).json({
        code: "get_all_post_success",
        posts: result,
        ok: true,
      });
    } catch (error) {
      client.close();
      res.status(500).json({ code: "get_all_posts_failed" });
      return;
    }
  }
}

export default handler;
