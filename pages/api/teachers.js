import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("speckle");

    const teachers = await db
      .collection("speckle-teachers")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    res.json(teachers);
  } catch (e) {
    console.error(e);
  }
};
