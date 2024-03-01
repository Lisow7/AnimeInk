import { hashPass } from "../utils/crypto.utils.js";

export const hashPassword = async (req, res, next) => {
  const { password } = req.body;

  try {
    // Hachage du mot de passe
    const hashResult = await hashPass(password);
    if (hashResult.error) {
      throw new Error(hashResult.error);
    }
    // Passage à l'étape suivante : création du compte

    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
