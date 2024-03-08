import query from "./init.db.js";

export const register = async (user) => {
  // Récupère les données (email et username) de l'utilisateur via les innputs client ou ThunderCLient et/ou autres...
  const { username, email } = user;

  // Récupère le password de l'utilisateur qui a été hasher dans la requête pour la bdd.
  const hashedPassword = user.hashedPassword;

  const sql = `
      INSERT INTO users (username, email, password)
      VALUES (?, ?, ?)`;

  let error = null;
  let result = null;

  try {
    // Ajout du password hashé [hashedPassword] à la place du [password] en dur.
    result = await query(sql, [username, email, hashedPassword]);
    return result;
  } catch (err) {
    error = err.message;
  } finally {
    return { info: error, result };
  }
};

export const login = async (email, password) => {
  const sql = `SELECT user_id, email, password FROM users WHERE email = ?`;

  let error = null;
  let result = null;

  try {
    // Récupère les données de l'utilisateur de la bdd via l'email remplit dans l'input client(formulaire) ou ThunderCLient et/ou autres...
    result = await query(sql, [email, password]);
    result = result[0];
  } catch (err) {
    error = err.message;
    throw new Error(`Failed to get user by email: ${error}`);
  } finally {
    return { error, result };
  }
};

export const updatePassword = async (user, user_id) => {
  const { hashedPassword } = user;

  const sql = `
    UPDATE users
    SET password = ?
    WHERE user_id = ?`;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [hashedPassword, user_id]);

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
