const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <h3>Suivez-nous</h3>
          <ul>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://linkedin.com">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="legal">
          <h3>Mentions légales</h3>
          <ul>
            <li>
              <a href="/terms">Termes et conditions</a>
            </li>
            <li>
              <a href="/privacy">Politique de confidentialité</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Anime-Ink. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
