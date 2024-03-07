import express from "express";
import {
  DeleteAvatar,
  UpdateProfile,
} from "../controllers/users.controllers.js";

const initUserRoutes = (app) => {
  const router = express.Router();

  router.put("/update/profile/:id", UpdateProfile);
  router.patch("/delete/profile/avatar/:id", DeleteAvatar);

  app.use("/users", router);
};

export default initUserRoutes;
