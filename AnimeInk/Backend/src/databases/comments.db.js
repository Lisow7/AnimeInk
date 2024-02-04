import query from "./init.db.js";

export const getAllComments = async () => {
  const sql = `SELECT * FROM comments`;
  console.info(`${result} First LOG !⚠️`);

  let error = null;
  let result = null;

  try {
    result = await query(sql);
  } catch (err) {
    error = `${err.message} Failed to GET all comments`;
  } finally {
    return { error, result };
  }
};
