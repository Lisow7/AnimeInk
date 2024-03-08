import query from "../databases/init.db.js";

export const updateProfile = async (user, user_id) => {
  // Extraction des clés et des valeurs de l'objet user
  const keys = Object.keys(user);
  const values = Object.values(user);

  // Construction de la requête SQL pour mettre à jour les valeurs du profil avec la variable keys on utilise le .map() pour générer un new array sur lequel on va mapper tous les champs et valeur de la table users.
  let sql = "UPDATE users SET ";
  const updateClauses = keys.map((key) => `${key} = ?`);
  sql += updateClauses.join(", ");
  sql += " WHERE user_id = ?"; // Adaptation de l'ID de l'utilisateur à user_id

  // Ajout de l'ID de l'utilisateur à la liste des valeurs
  values.push(user_id);

  let error = null;
  let result = null;

  try {
    result = await query(sql, values);

    if (result.affectedRows === 1) {
      return user_id;
    }
    return null;
  } catch (err) {
    error = err.message;
  } finally {
    return { error, result };
  }
};

export const deleteAvatar = async (avatar, user_id) => {
  const sql = `DELETE avatar FROM users WHERE user_id = ?`;

  let error = null;
  let result = null;

  try {
    [result] = await query(sql, [avatar, user_id]);
    if (result.affectedRows === 1) {
      return true;
    }
    return false;
  } catch (err) {
    error = err.message;
  } finally {
    return { error, result };
  }
};
