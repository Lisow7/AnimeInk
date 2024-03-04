import { register, login } from "../databases/accounts.db.js";
import { compareHash } from "../utils/crypto.utils.js";
import { generateToken } from "../middlewares/jwt.mdlwr.js";

export const Register = async (req, res) => {
  // Récupère l'entrée de l'utilisateur via les innputs client ou ThunderCLient et/ou autres...
  const { email, username } = req.body;

  try {
    // insert le compte utilisateur via les données enregistré dans le client (formulaire) ou Thunderclient et/ou autres...
    const response = await register({
      email,
      username,
      hashedPassword: req.hashedPassword,
    });

    if (response.error) {
      return res.status(404).json({ message: "Failed to register user ❌" });
    }
    // Crée une variable pour récuperer les toutes données de l'utilisateur pour pouvoir l'afficher dans le statut JSON depuis ThunderCLient et/ou autres...
    const newUser = { user_id: response.result.insertId, email, username };

    return res.status(201).json({
      message: "User created ⭕",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error 🚫" });
  }
};

export const Login = async (req, res) => {
  // Récupère l'entrée de l'utilisateur via les innputs client ou ThunderCLient et/ou autres...
  const { email, password } = req.body;

  try {
    // Récupère le compte utilisateur via l'email.
    const { result: user } = await login(email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password 🚧",
      });
    }

    // Compare les deux password et vérifie qu'ils sont compatibles.
    const isPasswordValid = await compareHash(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password 🚧" });
    }

    // Création du payload, pas besoin de crée la secretKey et jwtOptions, ils sont directement crée depuis le jwt.mdlwr.js
    const payload = {
      user_id: user.user_id,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      role_id: user.role_id,
    };

    // Génération du token avec le payload.
    const token = generateToken(payload);

    // Supprime le mot de passe du corps de la requête avant de le renvoyer au client pour une meilleur sécurité.
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
