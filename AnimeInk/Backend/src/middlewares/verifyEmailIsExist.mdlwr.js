import { login } from "../databases/accounts.db.js";

export const verifyEmailIsExist = async (req, res, next) => {
  const { email } = req.body;

  try {
    // Vérification de l'email dans la base de données.
    const user = await login(email);

    if (!user) {
      res.status(404).json({ message: "User FOUND !❌" });
    } else {
      // Passage à l'étape suivante : hachage du mot de passe
      next();
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
