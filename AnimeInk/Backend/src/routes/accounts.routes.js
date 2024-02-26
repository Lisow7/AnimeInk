import express from "express";
import { Register } from "../controllers/accounts.controllers.js";
import { verifyFormatEmail } from "../middlewares/verifyFormatEmail.mdlwr.js";
import { verifyEmailIsExist } from "../middlewares/verifyEmailIsExist.mdlwr.js";
import { verifyPasswordFormat } from "../middlewares/verifyPasswordFormat.mdlwr.js"; // Ajoutez cette ligne
import { hashPassword } from "../middlewares/hashPassword.mdlwr.js";

const initAccountRoutes = (app) => {
  const router = express.Router();

  router.post(
    "/register",
    verifyFormatEmail,
    verifyEmailIsExist,
    verifyPasswordFormat,
    hashPassword,
    Register
  );

  app.use("/account", router);
};

export default initAccountRoutes;
