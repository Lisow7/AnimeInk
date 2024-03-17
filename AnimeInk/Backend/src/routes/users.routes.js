import express from "express";
import {
  DeleteAvatar,
  UpdateProfile,
} from "../controllers/users.controllers.js";
import { verifyToken } from "../middlewares/jwt.mdlwr.js";
import { checkTokenAuth } from "../utils/tokens.utils.js";

const initUserRoutes = (app) => {
  const router = express.Router();

  router.put("/update/profile/:id", UpdateProfile); // A Hotfix pour la verfication et role ?
  router.patch(
    "/delete/profile/avatar/:id",
    verifyToken,
    checkTokenAuth,
    DeleteAvatar
  ); // A Hotfix pour le role ?

  app.use("/users", router);
};

export default initUserRoutes;
