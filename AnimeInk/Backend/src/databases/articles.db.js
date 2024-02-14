import query from "./init.db.js";

// Fonction pour récupérer tous les articles
export const getAllArticles = async () => {
  const sql = `SELECT * FROM articles`;

  try {
    const result = await query(sql);
    return result;
  } catch (error) {
    throw new Error("Error RETRIEVING Articles");
  }
};

// Fonction pour vérifier si l'article existe déjà
export const findArticle = async (api_url) => {
  const sql = `SELECT * FROM articles WHERE api_url = ?`;
  const values = [api_url];

  try {
    const result = await query(sql, values);
    return result;
  } catch (error) {
    throw new Error("Error Finding Article");
  }
};

// Fonction pour créer un nouvel article
export const addArticle = async (articleData) => {
  const { api_url } = articleData;
  const sql = `INSERT INTO articles (api_url) VALUES (?)`;
  const values = [api_url];

  try {
    const result = await query(sql, values);
    return result.insertId;
  } catch (error) {
    throw new Error("Error CREATED Article");
  }
};
