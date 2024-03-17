import express from "express";
import {
  GetAllComments,
  GetOneComment,
  CreateComment,
  UpdateComment,
  DeleteComment,
} from "../controllers/comments.controllers.js";
import { verifyToken } from "../middlewares/jwt.mdlwr.js";
import { checkTokenAuth } from "../utils/tokens.utils.js";

const initCommentsRoutes = (app) => {
  const router = express.Router();

  router.get("/all", GetAllComments); // A Hotfix pour la verfication et le role
  router.get("/comment/:id", verifyToken, checkTokenAuth, GetOneComment); // A Hotfix pour le role
  router.post("/add", CreateComment); // A Hotfix pour la verfication et le role
  router.put("/update/:id", verifyToken, checkTokenAuth, UpdateComment); // A Hotfix pour le role
  router.delete("/delete/:id", verifyToken, checkTokenAuth, DeleteComment);

  app.use("/comments", router);
};

export default initCommentsRoutes;
