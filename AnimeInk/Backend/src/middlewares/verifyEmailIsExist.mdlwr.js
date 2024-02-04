// import { findUserByEmail } from "../databases/account.db.js";

// export const verifyEmailIsExist = async (req, res, next) => {
//   const { email } = req.body;
//   console.info("LOG.INFO = Middleware verifyEmailIsExist Start ⚙️ -->", email);

//   try {
//     // Vérification de l'email dans la base de données.
//     const [user] = await findUserByEmail(email);
//     console.info("LOG.INFO = User in verifyEmailIsExist Start ⚠️ -->", [user]);
//     if (user !== undefined) {
//       res.status(200).send({ message: "Users email NOT FOUND !✅" });
//     } else {
//       res.status(404).json({ message: "User FOUND ❌!" });
//     }

//     // Passage à l'étape suivante : hachage du mot de passe
//     console.info("Email is not already exist !⭕");
//     console.info("Next step : Hash the password... 🪓");
//     next();
//   } catch (err) {
//     console.error("⚠️ HERE ERROR ⚠️", err);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };
