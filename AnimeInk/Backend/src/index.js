import express from "express";
import initRoutes from "./routes/init.routes.js";
import initMiddlewares from "./middlewares/init.mdlwr.js";

const app = express();
const PORT = process.env.PORT || 5000;

initMiddlewares(app);
initRoutes(app);
app.get("/", (req, res) => res.send("The main route is RUNNING !🛣️"));

/*
app.get("/", (req, res) => {
    // envoi au client de la réponse
    res.send("Hello World");
  });

  app.post("/", (req, res) => {
    res.send("Post request");
  });

  // app.get permet d'ecouter la route /user/"un id user"
  // l'id est dynamique
  app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
  
    // permet de voir le details de tous les headers - objet Headers
    console.log(req.headers);
    // utilisation de la methode .header() pour un header particulier
    console.log(req.header("User-Agent"));
  
    // const user = getUser(userId)
  
    res.set("Content-type", "application/json");
  
    // res.send(Request on /user with id: ${userId});
  
    res.status(200).json({ message: `Request on /user with id: ${userId}`});
  });
*/

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
