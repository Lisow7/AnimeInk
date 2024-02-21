import { register, login } from "../databases/accounts.db.js";

import { compareHash } from "../utils/crypto.utils.js";

import { jwtSign } from "../middlewares/jwt.mdlwr.js";

import { stringIsFilled } from "../utils/string.utils.js";

import isEmail from "validator/lib/isEmail.js";

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

  // Vérification de l'e-mail et du mot de passe
  if (!email || !isEmail(email)) {
    return res.status(403).json({ message: `Authentication failed` });
  }

  if (!stringIsFilled(password)) {
    return res.status(403).json({ message: `Authentication failed` });
  }

  try {
    const response = await login(email);
    const user = response.result[0];

    if (!user) {
      return res.status(401).json({ message: `Authentication failed` });
    }

    // Vérification du mot de passe
    const userId = user.user_id;
    const dbPassword = user.password;

    // Comparaison du mot de passe
    const passwordAreSame = await compareHash(password, dbPassword);

    if (!passwordAreSame) {
      return res.status(401).json({ message: `Authentication failed` });
    }

    // Token creation
    const token = jwtSign(userId, user.username, user.avatar);

    return res.status(200).json({
      message: `You are Signed in ! 🌐`,
      user: {
        userId,
        email,
        username: user.username,
        avatar: user.avatar,
        token,
      },
    });
  } catch (error) {
    console.error("Login controller error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
