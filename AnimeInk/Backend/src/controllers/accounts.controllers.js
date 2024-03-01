// Controller

import { register, findUserByEmail } from "../databases/accounts.db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const jwtOptions = { expiresIn: 28800 }; // 8 heures
export const secretKey = process.env.JWT_SECRET || "T0P_S3CRet";

export const Register = async (req, res) => {
  const { email, password, username, role_id } = req.body;

  try {
    const [response] = await register({ email, password, username, role_id });

    if (response.error) {
      return res.status(403).json({
        success: false,
        message: "Failed to register user ❌",
        error: response.error,
      });
    }

    const userId = response.result.insertId;

    return res
      .status(201)
      .json({ success: true, message: "User created ⭕", userId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error 🚫",
      error: error.message,
    });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { error, result: user } = await findUserByEmail(email);

    console.log("User from DB:", user);

    if (error || !user) {
      console.error("Error finding user:", error);
      return res.status(401).json({
        success: false,
        message: "Invalid email or password 🚧",
        error,
      });
    }

    console.log("Password from request:", password);
    console.log("Stored Password:", user.password);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    console.log("isPasswordValid:", isPasswordValid);

    if (!isPasswordValid) {
      console.log("Entered if statement");
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password 🚧" });
    }

    // Générer un token JWT pour l'utilisateur authentifié
    const payload = {
      userId: user.id, // Ajouter l'ID de l'utilisateur au payload
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      role_id: user.role_id,
    };

    console.log("Data Payload 📥", payload);

    const token = jwt.sign(payload, secretKey, jwtOptions);

    // Supprimer le mot de passe du corps de la requête avant de le renvoyer au client
    delete req.body.password;

    return res
      .status(200)
      .json({ success: true, message: "Login successful ✔️", token });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error 🚫",
      error: error.message,
    });
  }
};
