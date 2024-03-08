import express from "express";
import {
  GetAllArticles,
  CreateArticle,
} from "../controllers/articles.controllers.js";
// import { verifyToken } from "../middlewares/jwt.mdlwr.js";
// import { checkTokenAuth } from "../utils/tokens.utils.js";

const initArticlesRoutes = (app) => {
  const router = express.Router();

  router.get("/all", GetAllArticles);
  router.post("/add", CreateArticle);

  app.use("/articles", router);
};

export default initArticlesRoutes;
