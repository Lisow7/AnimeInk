import mysql from "mysql";

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

const pool = mysql.createPool({
  connectionLimit: 10000,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

const query = (sql, values = []) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, result, fields) => {
      //Ce qu'on fait ici une fois  la requete est executée
      if (error) {
        reject(error);
      }
      resolve(result);
      // En cas de SELECT
    });
  });
};

export default query;
