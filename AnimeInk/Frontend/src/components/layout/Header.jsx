const Header = () => {
  return (
    <header className="header">
      <div className="nav-container-left">
        <div className="logo">
          <h3>ANIME INK</h3>
        </div>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/mes-animes">Animes</a>
          </li>
        </ul>
      </nav>
      <div className="nav-container-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Let&apos;s Go</button>
        </div>
        <div>
          <button className="btn-log">Connexion</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
