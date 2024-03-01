// Controller

import { register, findUserByEmail } from "../databases/accounts.db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const jwtOptions = { expiresIn: 28800 }; // 8 heures
export const secretKey = process.env.JWT_SECRET || "T0P_S3CRet";

export const Register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const response = await register({ email, password, username });

    if (response.error) {
      return res.status(404).json({ message: "Failed to register user ❌" });
    }

    const userId = response.result.insertId;

    return res.status(201).json({ message: "User created ⭕", user: userId });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error 🚫" });
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
      user_id: user.user_id,
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
