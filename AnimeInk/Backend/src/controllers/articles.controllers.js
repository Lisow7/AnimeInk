import { getAllArticles } from "../databases/articles.db.js";

export const GetAllArticles = async (req, res) => {
  try {
    const response = await getAllArticles();
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).message(" Articles not found");
    }
  } catch (error) {
    res.status(500).send("All Articles NOT FOUND");
  }
};
