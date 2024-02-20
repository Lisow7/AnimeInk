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

export const getOneComment = async (comment_id) => {
  const sql = `
    SELECT * FROM comments WHERE comment_id = ?
  `;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [comment_id]);
  } catch (err) {
    error = err.message;
  } finally {
    return { error, result };
  }
};

export const addComment = async (commentData) => {
  const { content } = commentData;
  const sql = `INSERT INTO comments (content) VALUES (?)`;
  const values = [content];

  try {
    const result = await query(sql, values);
    if (result.affectedRows === 1) {
      return result.insertId;
    } else {
      throw new Error("Error creating COMMENT");
    }
  } catch (error) {
    throw new Error("Error creating comment: " + error.message);
  }
};

export const updateComment = async (content, comment_id) => {
  const sql = `UPDATE comments SET content = ? WHERE comment_id = ?`;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [content, comment_id]);
    if (result.affectedRows === 1) {
      return content;
    }
    return null;
  } catch (err) {
    error = err.message;
  } finally {
    return { error, result };
  }
};

export const deleteComment = async (comment_id) => {
  const sql = `DELETE FROM comments WHERE comment_id = ?`;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [comment_id]);
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
