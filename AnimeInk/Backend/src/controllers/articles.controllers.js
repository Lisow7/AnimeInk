import {
  getAllArticles,
  findArticle,
  addArticle,
} from "../databases/articles.db.js";

// Contrôleur pour récupérer tous les articles
export const GetAllArticles = async (req, res) => {
  try {
    const articles = await getAllArticles();
    if (!articles) {
      return res
        .status(404)
        .json({ success: false, data: articles, message: "Not Found ❌" });
    }
    return res
      .status(200)
      .json({ success: true, data: articles, message: "Found ⭕" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Interval Server Error 🚫" });
  }
};

// Contrôleur pour créer un nouvel article
export const CreateArticle = async (req, res) => {
  const { api_url } = req.body;

  try {
    const existingArticle = await findArticle(api_url);

    if (existingArticle.length > 0) {
      return res.status(409).json({
        success: undefined,
        message: "Article Already Exists !⚠️",
        article: existingArticle[0],
      });
    }
    const newArticle = await addArticle(req.body);
    return res.status(201).json({
      success: false,
      message: "Article CREATED Successfully !⭕",
      article_id: newArticle,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error creating article 🚫" });
  }
};
