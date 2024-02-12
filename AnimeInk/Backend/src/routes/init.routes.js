// import initAccountRoutes from "./account.routes.js";
import initArticlesRoutes from "./articles.routes.js";
import initCommentsRoutes from "./comments.routes.js";
// import initUserRoutes from "./user.routes.js";

const initRoutes = (app) => {
  // initAccountRoutes(app);
  initArticlesRoutes(app);
  initCommentsRoutes(app);
  // initUserRoutes(app);
};

export default initRoutes;

//Creer des fichiers differents pour les admins et users.
