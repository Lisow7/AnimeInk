import LogoAnimeInk from "../../assets/images/Logo-Anime-ink";

const Footer = () => {
  return (
    <>
      <img src={LogoAnimeInk} alt="Logo" />
      <section class="reseaux">
        <article>
          <a href="#Home">
            <img src="img/insta.png" alt="Instagram" />
          </a>
        </article>
        <article>
          <img src="img/fb.png" alt="Facebook" />
        </article>
        <article>
          <img src="img/twitter.png" alt="Twitter" />
        </article>
        <article>
          <img src="img/wa.png" alt="WhatsApp" />
        </article>
      </section>
      <section class="fin">
        <p>Copyright &copy; Anime-Ink</p>
      </section>
    </>
  );
};

export default Footer;
