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
