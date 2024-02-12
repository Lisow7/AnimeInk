import express from "express";
import { GetAllArticles } from "../controllers/articles.controllers.js";

const initArticlesRoutes = (app) => {
  const router = express.Router();

  router.get("/all", GetAllArticles);

  app.use("/articles", router);
};

export default initArticlesRoutes;
