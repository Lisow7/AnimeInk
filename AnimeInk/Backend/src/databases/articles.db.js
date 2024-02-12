import query from "./init.db.js";

// Cette requêtes sera nécessaire pour généré un algorithmqui permettra de verifier si l'article n'est pas existants dans la base de données.
export const getAllArticles = async () => {
  const sql = `
    SELECT * FROM articles`;

  let error = null;
  let result = null;

  try {
    result = await query(sql);
  } catch (err) {
    error = err.message;
  } finally {
    return { error, result };
  }
};

// Fonction pour vérifier si l'article existe déjà
export const findArticle = async (api_url) => {
  const sql = `
    SELECT * FROM articles WHERE api_url = ?`;
  const values = [api_url];

  let error = null;
  let result = null;

  try {
    result = await query(sql, values);
  } catch (err) {
    error = err.message;
  } finally {
    return { error, result };
  }
};

export const addArticle = async (articles) => {
  const { api_url } = articles;
  try {
    const result = await connection
      .promise()
      .query("INSERT INTO category (name, color, font_color) VALUES (?)", [
        api_url,
      ]);
    if (result.affectedRows === 1) {
      return result.insertId;
    }
    return category;
  } catch (error) {
    throw new Error("Failed to CREATE Category");
  }
};
