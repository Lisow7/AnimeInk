import express from "express";
import { Register } from "../controllers/accounts.controllers.js";
import { verifyFormatEmail } from "../middlewares/verifyFormatEmail.mdlwr.js";
import { verifyEmailIsExist } from "../middlewares/verifyEmailIsExist.mdlwr.js";
import { verifyPasswordFormat } from "../middlewares/verifyPasswordFormat.mdlwr.js";
import { hashPassword } from "../middlewares/hashPassword.mdlwr.js";

const initAccountRoutes = (app) => {
  const router = express.Router();

  // Ajout des middlewares verifyEmailIsExist, verifyPasswordFormat et hashPassword à la route POST "/register"
  router.post(
    "/register",
    verifyFormatEmail, // Amélioration : Supprimer et utiliser la func de js directement "isEmail".
    verifyEmailIsExist,
    verifyPasswordFormat,
    hashPassword,
    Register
  );

  // Ajout des middlewares verifyEmailIsExist, verifyPasswordFormat et compareHashPassword à la route POST "/sign-in"
  router.post(
    "/sign-in",
    verifyEmailIsExist,
    verifyPasswordFormat,
    compareHashPassword,
    Login
  );

  app.use("/account", router);
};

export default initAccountRoutes;
