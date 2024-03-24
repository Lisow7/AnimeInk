import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home.jsx"; // Importez vos composants de page
import Profile from "../pages/Profile.jsx";
import Article from "../pages/Article.jsx";
import LoginRegister from "../pages/LoginRegister.jsx";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/article" component={Article} />
        <Route path="/loginRegister" component={LoginRegister} /> // Rajoutez
        une sous route.
        {/* Ajoutez + de routes ici si nécessaire */}
      </Switch>
    </Router>
  );
};

export default App;
