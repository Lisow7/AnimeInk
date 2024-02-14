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
