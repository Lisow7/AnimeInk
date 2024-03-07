import query from "../databases/init.db.js";

export const updateProfile = async (userData, user_id) => {
  const { username, email, avatar } = userData;

  const sql = `UPDATE users SET username = ?, email = ?, avatar = ? WHERE user_id = ?`;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [username, email, avatar, user_id]);

    if (result.affectedRows === 1) {
      return userData;
    }
    return null;
  } catch (err) {
    error = err.message;
  } finally {
    return { error, result };
  }
};
