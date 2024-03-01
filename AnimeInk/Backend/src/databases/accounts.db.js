import query from "./init.db.js";
import { hashPass } from "../utils/crypto.utils.js";

export const register = async (newAccount) => {
  const { username, email, password } = newAccount;

  // Hacher le mot de passe
  const { Error: hashError, hashed } = await hashPass(password);

  if (hashError) {
    return { error: hashError, result: null };
  }

  const sql = `
      INSERT INTO users (username, email, password)
      VALUES (?, ?, ?)`;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [username, email, hashed]);
    return result;
  } catch (err) {
    error = err.message;
  } finally {
    return { error: error, result };
  }
};

export const findUserByEmail = async (email) => {
  const sql = `SELECT * FROM users WHERE email = ?`;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [email]);
    result = result[0];
  } catch (err) {
    error = err.message;
    throw new Error(`Failed to get user by email: ${error}`);
  } finally {
    return { error, result };
  }
};
