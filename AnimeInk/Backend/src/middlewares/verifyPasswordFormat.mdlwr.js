export const verifyPasswordFormat = (req, res, next) => {
  const { password } = req.body;

  try {
    // Vérification du format du mot de passe
    if (!password || password.length <= 8) {
      return res.status(403).json({
        message: `Password must have at least 8 characters!🚧`,
      });
    }

    // Passage à l'étape suivante
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
