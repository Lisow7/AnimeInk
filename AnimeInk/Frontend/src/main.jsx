import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import "./index.css";
import Article from "./pages/Article.jsx";
import Profile from "./pages/Profile.jsx";
import LoginRegister from "./pages/LoginRegister.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Article />
    <Profile />
    <LoginRegister />
    <Footer />
  </React.StrictMode>
);
