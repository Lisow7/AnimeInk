// UTILS = token.utils.js

import query from "../databases/init.db.js";

const saveToken = async (userId, authToken) => {
  const sql = "INSERT INTO users (auth_token) VALUES (?) WHERE user_id = ?";

  let error = null;
  let result = null;

  try {
    // Met à jour la colonne "auth_token" dans la base de données
    result = await query(sql, [authToken, userId]);
  } catch (err) {
    error = err.message;
    // En cas d'erreur, lance une nouvelle erreur avec un message explicatif
    throw new Error(`Failed to save token: ${error}`);
  } finally {
    // Retourne un objet contenant les détails de l'opération (erreur et résultat)
    return { error, result };
  }
};

export default saveToken;
