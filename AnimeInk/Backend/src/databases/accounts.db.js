import query from "./init.db.js";

export const register = async (username, email, password) => {
  const sql = `
    INSERT INTO USERS (username, email, password)
    VALUES (?, ?, ?)`;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [username, email, password]);
    return result;
  } catch (err) {
    error = err.message;
  } finally {
    return { error, result };
  }
};

export const findUserByEmail = async (email) => {
  const sql = `SELECT * FROM user WHERE email = ?`;

  try {
    const [response] = await query(sql, [email]);
    return response[0];
  } catch (err) {
    throw new Error("Failed to get user by email", err);
  }
};

export const login = async (email) => {
  const sql = `
    SELECT user_id, email, password
    FROM users
    WHERE email = ?`;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [email]);
  } catch (err) {
    error = err.message;
  } finally {
    return { error, result };
  }
};

// export const AccountDB = { register, findUserByEmail, login };

/*
const create = async (email, password, pseudo = "Anonyme") => {
  const sql = INSERT INTO users (email, password, pseudo)
    VALUES (?, ?, ?);

  let error = null;
  let result = null;

  try {
    // le resultat sera un objet avec diverses infos
    // car ici nous avons un INSERT
    result = await query(sql, [email, password, pseudo]);
  } catch (e) {
    error = e.message;
  } finally {
    return { error, result };
  }
};

const readByEmail = async (email) => {
  const sql = SELECT user_id, email, password
  FROM users
  WHERE email = ?;

  let error = null;
  let result = null;

  try {
    // le resultat sera un tableau avec les données trouvées
    // car ici nous avons un SELECT
    result = await query(sql, [email]);
  } catch (e) {
    error = e.message;
  } finally {
    return { error, result };
  }
};

export const UserDB = { create, readByEmail };

*/
