import jwt from "jsonwebtoken";
import query from "../databases/init.db.js";

const jwtOptions = { expiresIn: 28800000 }; // Equivaut à 8H
const secretKey = process.env.JWT_SECRET || "T0P_S3CRet";

export const generateToken = (userId) => {
  // Création du payload, pas besoin de crée la secretKey et jwtOptions, ils sont directement crée depuis le jwt.mdlwr.js
  const payload = {
    user_id: userId,
  };

  const token = jwt.sign(payload, secretKey, jwtOptions);
  // console.log("Generated token:", token);
  return token;
};

export const verifyToken = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: Token not provided ❌" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    // console.log("Decoded token:", decoded);
    const userId = decoded.user_id;
    // console.log("Decoded UserId:", userId);

    // Récupération des données de l'utilisateur depuis la base de données
    const sql =
      "SELECT username, email, avatar, role_id, auth_token FROM users WHERE user_id = ?";
    const user = await query(sql, [userId]);

    if (!user || !user.length) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: User not found ❌" });
    }

    req.authUser = user[0]; // Ajout des données de l'utilisateur à la requête
    next();
  } catch (error) {
    // console.error("Token verification error:", error);
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: Invalid token ❌" });
  }
};
