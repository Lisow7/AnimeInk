import express from "express";
import {
  Register,
  Login,
  UpdatePassword,
} from "../controllers/accounts.controllers.js";
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

  router.post("/sign-in", verifyFormatEmail, verifyPasswordFormat, Login);

  router.patch(
    "/update-password/:id",
    verifyPasswordFormat,
    hashPassword,
    UpdatePassword
  );

  app.use("/account", router);
};

export default initAccountRoutes;
