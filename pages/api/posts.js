import Query from "../../config/db";

export default async function handler(req, res) {
  let slug = req.body?.slug;
  let sqlQuery = "SELECT * from blogs_hruday.blogs";
  if (slug) {
    sqlQuery += " where postId = ? ";
  }
  let valuesParam;

  if (slug) {
    valuesParam = [slug];
  } else {
    valuesParam = [];
  }

  try {
    const data = await Query({ query: sqlQuery, values: valuesParam });
    res.status(200).json({ results: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

// export default function handler(req, res) {
// res.status(200).json({ name: 'John Doe' });
// }
