import isEmail from "validator/lib/isEmail.js";

export const verifyFormatEmail = (req, res, next) => {
  try {
    const { email } = req.body;

    // Vérification de l'email
    if (!email || !isEmail(email)) {
      return res.status(403).json({ message: `Invalid email format` });
    }

    // Passage à l'étape suivante : vérification de l'existence de l'email
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
