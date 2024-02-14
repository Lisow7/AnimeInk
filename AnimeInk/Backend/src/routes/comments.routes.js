import express from "express";
import { GetAllComments, GetOneComment } from "../controllers/comments.controllers.js";

const initCommentsRoutes = (app) => {
  const router = express.Router();
  
  router.get("/all", GetAllComments);
  router.get("/comment/:id", GetOneComment);

  app.use("/comments", router);
};

export default initCommentsRoutes;
// Faire un token pour R.U.D en tant que admin, TOUS les utilisateurs.
// Faire un token pour C.R.U.D en tant que utilisateur pour acceder à toutes ses données.
