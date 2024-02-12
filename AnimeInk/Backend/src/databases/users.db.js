// import query from "./init.db.js";

// const create = async (email, password, name) => {
//   const sql =`
//     INSERT INTO USERS (email, password, name)
//     VALUES (?, ?, ?)`;

//   let error = null;
//   let result = null;

//   try {
//     result = await query(sql, [email, password, name]);
//   } catch (e) {
//     error = e.message;
//   } finally {
//     return { error, result };
//   }
// };

// const signIn = async (email) => {
//   const sql =`
//     SELECT user_id, email, password
//     FROM users
//     WHERE email = ?`;

//   let error = null;
//   let result = null;

//   try {
//     result = await query(sql, [email]);
//   } catch (e) {
//     error = e.message;
//   } finally {
//     return { error, result };
//   }
// };

// export const UserDB = { create, signIn };


// const create = async (email, password, pseudo = "Anonyme") => {
//   const sql = INSERT INTO users (email, password, pseudo)
//     VALUES (?, ?, ?);

//   let error = null;
//   let result = null;

//   try {
//     // le resultat sera un objet avec diverses infos
//     // car ici nous avons un INSERT
//     result = await query(sql, [email, password, pseudo]);
//   } catch (e) {
//     error = e.message;
//   } finally {
//     return { error, result };
//   }
// };

// const readByEmail = async (email) => {
//   const sql = SELECT user_id, email, password
//   FROM users
//   WHERE email = ?;

//   let error = null;
//   let result = null;

//   try {
//     // le resultat sera un tableau avec les données trouvées
//     // car ici nous avons un SELECT
//     result = await query(sql, [email]);
//   } catch (e) {
//     error = e.message;
//   } finally {
//     return { error, result };
//   }
// };

// export const UserDB = { create, readByEmail };
