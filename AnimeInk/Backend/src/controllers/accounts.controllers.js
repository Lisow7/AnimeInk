import { register } from "../databases/accounts.db.js";

// import { compareHash } from "../utils/crypto.utils.js";

// import { jwtSign } from "../middlewares/jwt.mdlwr.js";

// import { stringIsFilled } from "../utils/string.utils.js";

export const Register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const response = await register({ email, password, username });

    if (response.error) {
      return res.status(404).json({ message: "Failed to register user" });
    }

    const userId = response.result.insertId;

    return res.status(201).json({ message: "User created", user: userId });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
