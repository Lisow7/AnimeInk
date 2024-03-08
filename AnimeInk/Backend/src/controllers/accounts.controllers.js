import { register, login, updatePassword } from "../databases/accounts.db.js";
import { compareHash } from "../utils/crypto.utils.js";
import { generateToken } from "../middlewares/jwt.mdlwr.js";
import { saveToken } from "../utils/tokens.utils.js";

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
    // Crée une variable pour récuperer toutes less données de l'utilisateur via l'id pour pouvoir l'afficher en JSON pour le serveur.

    const { result: user } = await login(email);

    // Génération du token avec l'ID de l'utilisateur
    const token = generateToken(user.user_id);
    console.log("Generated token in Register:", token);

    // Enregistrement du token dans la base de données
    await saveToken(user.user_id, token);

    const newUser = {
      user_id: response.result.insertId,
      email,
      username,
      token,
    };

    // Supprime le mot de passe du corps de la requête avant de le renvoyer au client pour une meilleur sécurité.
    delete req.body.password;

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
  const { email, password, username } = req.body;

  try {
    // Objet "user" du resultat de la requête nommé "result" du model login qui permet d'accèder au compte utilisateur via l'email.
    const { result: user } = await login(email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password 🚧",
      });
    }

    // Objet "user" du resultat de la requête nommé "result" qui permet d'acceder au password via l'email et on le compare avec le utils de "bcrypt.compare(entryPassword, dbPassword) et il atttent un booléan "success" true ou false.
    const isPasswordValid = await compareHash(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password 🚧" });
    }

    // Génération du token avec l'ID de l'utilisateur
    const token = generateToken(user.user_id);
    console.log("Generated token in Login:", token); // Ajout du log

    // Enregistrement du token dans la base de données
    await saveToken(user.user_id, token);

    // Supprime le mot de passe du corps de la requête avant de le renvoyer au client pour une meilleur sécurité.
    delete req.body.password;

    return res.status(202).json({
      success: true,
      message: "Login successful ✅",
      username,
      email,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error 🚫",
      error: error.message,
    });
  }
};

export const UpdatePassword = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await updatePassword(
      {
        hashedPassword: req.hashedPassword,
      },
      id
    );
    console.error(response, "Error -> Model = updatePass ! 🚧");
    console.info("Password hashed", req.hashedPassword);

    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Not UPDATING ❌",
      });
    }

    res.status(202).json({
      success: true,
      message: "UPDATED Successfully ✅",
      password: req.hashedPassword,
    });

    return [response.hashedPassword];
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error 🚫", error });
  }
};
