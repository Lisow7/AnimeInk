import query from "../databases/init.db.js";

export const updateProfile = async (user, user_id) => {
  const { username, email, avatar } = user;

  const sql = `UPDATE users SET username = ?, email = ?, avatar = ? WHERE user_id = ?`;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [username, email, avatar]);

    if (result.affectedRows === 1) {
      return user_id;
    }
    return null;
  } catch (err) {
    error = err.message;
  } finally {
    return { error, result };
  }
};

export const deleteAvatar = async (avatar, user_id) => {
  const sql = `UPDATE users SET avatar = NULL WHERE user_id = ?`;

  let error = null;
  let result = null;

  try {
    [result] = await query(sql, [avatar, user_id]);
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
