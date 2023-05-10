import { MongoClient } from "mongodb";
import { connectionString } from "./contact";

async function handler(req, res) {
  let client;

  try {
    client = await MongoClient.connect(connectionString);
  } catch (error) {
    res.status(500).json({ code: "not_connect_database", ok: false });
    return;
  }

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

export default handler;
