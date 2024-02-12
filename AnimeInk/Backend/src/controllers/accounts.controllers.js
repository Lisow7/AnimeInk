// import { register } from "../databases/accounts.db.js";

// // import { compareHash } from "../utils/crypto.utils.js";

// // import { jwtSign } from "../middlewares/jwt.mdlwr.js";

// // import { stringIsFilled } from "../utils/string.utils.js";


// // const Register = async (req, res) => {
// //     const { email, password, username } = req.body;

// //     try {

// //         // Check if email is invalid
// //         if (!email || !isEmail(email)) {
// //         return res.status(403).json({ message: `Your Email is already exist ❌`});
// //         }


// //         //Check if password is invalid
// //         if (!password || password.length <= 4) {
// //         return res
// //             .status(403)
// //             .json({ message: `Password must have at least 5 chatacters !🚧` });
// //         }

// //         //Hash password
// //         const hashResult = await hashPass(password);
// //         const hashError = hashResult.error;

// //         if (hashError) {
// //             throw new Error(hashError);
// //         }

// //         //Create SQL
// //         const response = await UserDB.create(email, hashResult.hashed);
// //         const responseError = response.error;


// //         if (responseError) {
// //         // console.log("Database error:", responseError);
// //             throw new Error(responseError);
// //         }

// //         const userId = response.result.insertId;

// //         return res.status(200).json({ message: "User created", user: userId });

// //     } catch (error) {
// //     if (error.status) {
// //        return res.status(500).json({ message: "Internal Server Error" });
// //     }
// //     } finally {
// //       // Any cleanup or finalization code can be placed here
// //     }
// // };

// export const Register = async(req, res) => {
//     const { email, password, username } = req.body;
//     console.info("LOG.INFO = Controller createAccount Start ⚙️ -->", req.body);

//     try {
//         // Création du compte dans la base de données
//         const response = await register(email, password.hashed, username);
//         if (response === null) {
//             console.error("LOG.ERROR = Data NOT FOUND ❌ -->", response);
//             return res.status(404).json({ message: "METHOD POST NOT FOUND" });
//         }

//         const userId = response.result.insertId;

//         console.info("LOG.INFO = Controller createAccount end ⚙️ -->", userId);
//         return res.status(200).json({ message: "User created", user: userId });

//     }
//     catch (error) {
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// };
