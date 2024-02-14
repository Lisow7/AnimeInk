// controllers/articles.controllers.js

import {
  getAllArticles,
  findArticle,
  addArticle,
} from "../databases/articles.db.js";

// Contrôleur pour récupérer tous les articles
export const GetAllArticles = async (req, res) => {
  try {
    const articles = await getAllArticles();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).send("Error retrieving articles");
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
      const newArticleId = await addArticle(req.body);
      return res.status(201).json({
        message: "Article CREATED Successfully !⭕",
        article_id: newArticleId,
      });
    }
  } catch (error) {
    res.status(500).send("Error creating article");
  }
};
