import initAccountRoutes from "./account.routes.js";
// import initArticleRoutes from "./article.routes.js";
import initCommentsRoutes from "./comments.routes.js";
// import initUserRoutes from "./user.routes.js";

const initRoutes = (app) => {
  initAccountRoutes(app);
  // initArticleRoutes(app);
  initCommentsRoutes(app);
  // initUserRoutes(app);
};

export default initRoutes;

//Creer des fichiers differents pour les admins et users.
