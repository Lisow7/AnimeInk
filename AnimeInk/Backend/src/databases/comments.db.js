import query from "./init.db.js";

export const getAllComments = async () => {
  const sql = `
    SELECT * FROM comments`;

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

export const getOneComment = async (id) => {
  const sql = `
  SELECT * FROM comments WHERE comment_id
  `;

  let error = null;
  let result = null;


  try {
    result = await query(sql, [id]);
    console.log(result);
  } catch (err) {
    error = err.message;
  } finally {
    return { error, result };
  }
};

export const findComment = async (id) => {
  const sql = `SELECT * FROM comments WHERE comment_id = ?`;

  try {
    const result = await query(sql, [id]);
    return result;
  } catch (error) {
    throw new Error("Error FINDING Comments");
  }
};

export const addComment = async (commentData) => {
  const { content } = commentData;
  const sql = `INSERT INTO comments (content) VALUES (?)`;
  const values = [content];

  try {
    const result = await query(sql, values);
    return result.insertId;
  } catch (error) {
    throw new Error("Error CREATED Comments");
  }
};
