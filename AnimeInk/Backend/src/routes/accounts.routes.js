// import express from "express";
// import { Register } from "../controllers/account.controller.js";
// import { verifyFormatEmail } from "../middlewares/verifyFormatEmail.mdlwr.js";
// import { verifyEmailIsExist } from "../middlewares/verifyEmailIsExist.mdlwr.js";
// import { hashPassword } from "../middlewares/hashPassword.mdlwr.js";

// const initAccountRoutes = (app) => {
//     const router = express.Router();

//     router.post("/register", verifyFormatEmail, verifyEmailIsExist, hashPassword, Register);
//     // router.post("/login", );

//     app.use("/account", router);
// };

// export default initAccountRoutes;
// // Faire un token pour R.U.D en tant que admin, TOUS les utilisateurs.
// // Faire un token pour C.R.U.D en tant que utilisateur pour acceder à toutes ses données.
