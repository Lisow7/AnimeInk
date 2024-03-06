import { hashPass } from "../utils/crypto.utils.js";

export const hashPassword = async (req, res, next) => {
  const { password } = req.body;

  try {
    // On hash le password récupèrer par le client.
    const hashedPassword = await hashPass(password);
    // Une fois hashé on définie le password à stocker dans la bdd.
    req.hashedPassword = hashedPassword;
    // Passage à l'étape suivante : le controller.
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error 🚫" });
  }
};
