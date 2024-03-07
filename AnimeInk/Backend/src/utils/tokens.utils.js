// UTILS = token.utils.js

import query from "../databases/init.db.js";

const saveToken = async (userId, authToken) => {
  const sql = "UPDATE users SET auth_token = ? WHERE user_id = ?";
  console.log("User ID:", userId);

  let error = null;
  let result = null;

  try {
    result = await query(sql, [authToken, userId]);
    console.log("Token saved successfully!");
  } catch (err) {
    error = err.message;
    console.error("Failed to save token:", error);
    throw new Error(`Failed to save token: ${error}`);
  } finally {
    return { error, result };
  }
};

export default saveToken;
