import { register, login } from "../databases/accounts.db.js";
import { compareHash } from "../utils/crypto.utils.js";
import { generateToken } from "../middlewares/jwt.mdlwr.js";

export const Register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const response = await register({ email, password, username });

    if (response.error) {
      return res.status(404).json({ message: "Failed to register user ❌" });
    }

    const userId = response.result.insertId;

    return res.status(201).json({
      message: "User created ⭕",
      user: userId,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error 🚫" });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { result: user } = await login(email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password 🚧",
      });
    }

    const isPasswordValid = await compareHash(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password 🚧" });
    }

    const payload = {
      user_id: user.user_id,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      role_id: user.role_id,
    };

    const token = generateToken(payload);

    // Supprimer le mot de passe du corps de la requête avant de le renvoyer au client
    delete req.body.password;

    return res
      .status(200)
      .json({ success: true, message: "Login successful ✅", token });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error 🚫",
      error: error.message,
    });
  }
};
