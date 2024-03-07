import initAccountRoutes from "./accounts.routes.js";
import initArticlesRoutes from "./articles.routes.js";
import initCommentsRoutes from "./comments.routes.js";
import initUserRoutes from "./users.routes.js";

const initRoutes = (app) => {
  initAccountRoutes(app);
  initArticlesRoutes(app);
  initCommentsRoutes(app);
  initUserRoutes(app);
};

export default initRoutes;
