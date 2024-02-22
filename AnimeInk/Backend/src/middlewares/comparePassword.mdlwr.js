import { compareHash } from "../utils/crypto.utils.js";

// Middleware pour comparer le mot de passe haché stocké en base de données avec le mot de passe non haché fourni dans la requête
export const compareHashPassword = async (req, res, next) => {
  const { password } = req.body;
  const { users } = req.body.users; // Si ça ne fonctionne pas mettre "users" à la place ?

  try {
    // Comparaison des mots de passe
    const passwordAreSame = await compareHash(password, users);

    if (!passwordAreSame) {
      return res.status(401).json({ message: `Authentication failed` });
    }

    // Passage à l'étape suivante
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
