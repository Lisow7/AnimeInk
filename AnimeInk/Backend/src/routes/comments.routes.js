import express from "express";
import { GetAllComments } from "../controllers/comments.controllers.js";

const initCommentsRoutes = (app) => {
  const router = express.Router();

  router.get("/all", GetAllComments);

  app.use("/comments", router);
};

export default initCommentsRoutes;
// Faire un token pour R.U.D en tant que admin, TOUS les utilisateurs.
// Faire un token pour C.R.U.D en tant que utilisateur pour acceder à toutes ses données.
