const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h3>ANIME INK</h3>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/mes-animes">Animes</a>
          </li>
          <li>
            <a href="/mon-profil">Connexion</a>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">Let&apos;s Go</button>
      </div>
    </header>
  );
};

export default Header;
