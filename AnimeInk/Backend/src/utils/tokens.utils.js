import query from "../databases/init.db.js";

export const saveToken = async (userId, authToken) => {
  const sql = "UPDATE users SET auth_token = ? WHERE user_id = ?";
  console.log("User ID:", userId);

  let error = null;
  let result = null;

  try {
    result = await query(sql, [authToken, userId]);
    console.log("Token saved successfully ! 🛡️", authToken);
  } catch (err) {
    error = err.message;
    console.error("🚧Failed to save token :", error);
    return error;
  } finally {
    return { error, result };
  }
};

export const checkTokenAuth = (req, res, next) => {
  try {
    const requestedUserId = parseInt(req.params.id);

    console.log({
      message: "Find User ID by entryCLient ♻️",
      user: requestedUserId,
    });

    const authUserId = req.authUser.user_id;

    console.log({
      message: "Find Authentificated User ID in auth_token ♻️",
      auth_token: authUserId,
    });

    if (requestedUserId !== authUserId) {
      return res.status(403).json({
        success: false,
        access: null,
        message: `You are not allowed ⛔`,
      });
    }
    next();
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Interval Server Error 🚫" });
  }
};
