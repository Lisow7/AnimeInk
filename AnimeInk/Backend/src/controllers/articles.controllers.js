import { getAllArticles, findArticle } from "../databases/articles.db.js";

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

export const CreateArticle = async (req, res) => {
  const { api_url } = req.body;
  const article = api_url;

  // Vérifier si toutes les données requises sont fournies
  if (!article) {
    return res.status(400).json({ error: "Article is required" });
  }

  try {
    // Vérifier si l'article existe déjà
    const existingArticle = await findArticle(article);

    if (existingArticle.result) {
      // Si l'article existe déjà, utiliser les données de l'article existant
      // Nous pouvons ajouter votre logique spécifique ici, par exemple, ajouter un commentaire à l'article existant
      return res.status(200).json({
        message: "Article already exists",
        article: existingArticle.result,
      });
    } else {
      // Si l'article n'existe pas, créer un nouvel article
      // Ajouter votre logique pour créer un nouvel article ici
      return res.status(201).json({ message: "Article created successfully" });
    }
  } catch (error) {
    return res.status(500).send("Error creating article");
  }
};
