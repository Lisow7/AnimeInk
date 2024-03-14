import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import "./index.css";
import Article from "./pages/Article.jsx";
import Profile from "./pages/Profile.jsx";
import LoginRegister from "./pages/LoginRegister.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <Article />
    <Profile />
    <LoginRegister />
  </React.StrictMode>
);
