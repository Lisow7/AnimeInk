// import { UserDB } from "../databases/user.db.js";
// import isEmail from "validator/lib/isEmail.js";
// import { v4 as uuidv4 } from 'uuid';
// import { hashPass, compareHash } from "../utils/crypto.utils.js";
// import { jwtSign } from "../middlewares/jwt.mdlwr.js";
// import { stringIsFilled } from "../utils/string.utils.js";


// const create = async (req, res) => {
//   const { email, password, name } = req.body;

//   // try{

//   // Check if email is invalid
//   if (!email || !isEmail(email)) {
//     return res.status(403).json({ message: `Authentication failed`});
//   }


//   //Check if password is invalid
//   if (!password || password.length <= 4) {
//     return res
//       .status(403)
//       .json({ message: `Password must have at least 5 chatacters` });
//   }

//   //Hash password

//   const hashResult = await hashPass(password);
//   const hashError = hashResult.error;


//   if (hashError) {
//     return res.status(500).json({ message: hashError });
//   }

//   //Create SQL
//   const response = await UserDB.create(email, hashResult.hashed);
//   const responseError = response.error;


//   if (responseError) {
//     // console.log("Database error:", responseError);
//     return res.status(500).json({ message: responseError });
//   }

//   const userId = response.result.insertId;

//   return res.status(200).json({ message: "User created", user: userId });

// };

// const signIn = async (req, res) => {
//     const { email, password, name } = req.body;


//     // Check if email is invalid
//     if (!email || !isEmail(email)) {
//       return res.status(403).json({ message: `Authentication failed` });
//     }


//     //Check if password is invalid
//     if (!stringIsFilled(password)) {
//       return res.status(403).json({ message: `Authentication failed` });
//     }


//     //SQL
//     const response = await UserDB.signIn(email);
//     const responseErr = response.error;

//     if (responseErr) {
//       return res.status(401).json({ message: responseErr });
//     }

//     const result = response.result;
//     const user = result[0];

//     if (!user) {
//       return res.status(401).json({ message: `Authentication failed` });
//     }

//     //Verification password for user authentification
//     const userId = user.user_id;
//     const dbPassword = user.password;
//     const userName = user.username;

//     const passAreSame = await compareHash(password, dbPassword);

//     if (!passAreSame) {
//       return res.status(401).json({ message: `Authentication failed` });
//     }

//     //Token creation
//     const token = jwtSign(userId);


//     return res
//       .status(200)
//       .json({ message: `sign_in_ok`, user: { userId, email, userName, token } });
//   };

//   export const UserController = {
//     create,
//     signIn,
//   };
