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

export const getOneComment = async(id) => {
  const sql = `
  SELECT comment_id FROM comments WHERE user_id
  `;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [id]);
  }
  catch (err) {
    error = err.message;
  }
  finally {
    return { error, result };
  }
};

export const TestComment = async () => {
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

export const findComment = async (user_id, content) => {
  const sql = `SELECT * FROM comments WHERE user_id, content = ?, ?`;
  const values = [user_id, content];

  try {
    const result = await query(sql, values);
    return result;
  } catch (error) {
    throw new Error("Error FINDING Article");
  }
};

export const addComment = async (commentData) => {
  const userId = req.params;
  const { content } = commentData;
  const sql = `INSERT INTO comments (user_id, content) VALUES (?, ?)`;
  const values = [userId, content];

  try {
    const result = await query(sql, values);
    return result.insertId;
  } catch (error) {
    throw new Error("Error CREATED Article");
  }
};