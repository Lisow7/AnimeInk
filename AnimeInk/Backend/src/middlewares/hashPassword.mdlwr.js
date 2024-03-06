import { hashPass } from "../utils/crypto.utils.js";

export const hashPassword = async (req, res, next) => {
  const { password } = req.body;

  try {
    const hashedPassword = await hashPass(password);
    req.hashedPassword = hashedPassword;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error 🚫" });
  }
};
