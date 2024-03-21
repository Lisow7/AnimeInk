import React from "react";
import "./Header.scss"; // Import du fichier de style SASS

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/your/logo.png" alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/mes-animes">Mes Animes</a>
          </li>
          <li>
            <a href="/mon-profil">Mon Profil</a>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Rechercher..." />
        <button type="submit">Rechercher</button>
      </div>
    </header>
  );
};

export default Header;
