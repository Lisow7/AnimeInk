import express from "express";
import { UpdateProfile } from "../controllers/users.controllers.js";

const initUserRoutes = (app) => {
  const router = express.Router();

  router.put("/update/profile/:id", UpdateProfile);

  app.use("/users", router);
};

export default initUserRoutes;
