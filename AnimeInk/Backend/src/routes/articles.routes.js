import express from "express";
import {
  GetAllArticles,
  CreateArticle,
} from "../controllers/articles.controllers.js";

const initArticlesRoutes = (app) => {
  const router = express.Router();

  router.get("/all", GetAllArticles);

  router.post("/add", CreateArticle);

  app.use("/articles", router);
};

export default initArticlesRoutes;
