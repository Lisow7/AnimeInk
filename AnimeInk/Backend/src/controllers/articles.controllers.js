import {
  getAllArticles,
  findArticle,
  addArticle,
} from "../databases/articles.db.js";

// Contrôleur pour récupérer tous les articles
export const GetAllArticles = async (req, res) => {
  try {
    const articles = await getAllArticles();
    res.status(200).json({ data: articles, message: "⭕" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error 🚫", error });
  }
};

// Contrôleur pour créer un nouvel article
export const CreateArticle = async (req, res) => {
  const { api_url } = req.body;

  try {
    const existingArticle = await findArticle(api_url);

    if (existingArticle.length > 0) {
      return res.status(409).json({
        message: "Article Already Exists !⚠️",
        article: existingArticle[0],
      });
    } else {
      const newArticle = await addArticle(req.body);
      return res.status(201).json({
        message: "Article CREATED Successfully !⭕",
        article_id: newArticle,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error 🚫", error });
  }
};
