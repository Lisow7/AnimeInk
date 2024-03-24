import Picture from "../components/Picture";
import AnimeCategory from "../components/animeCategory/AnimeCategory";
import AnimeNews from "../components/animeNews/AnimeNews.jsx";
import AnimeRandom from "../components/animeRandom/AnimeRandom.jsx";

const App = () => {
  return (
    <>
      <h1 className="start">🈴 MAIN PAGE 🈴</h1>
      <Picture />
      {/* <AnimeCategory /> */}
      {/* <AnimeNews /> */}
      <AnimeRandom />
      <p className="start"> Welcome ! 🖐️</p>;
    </>
  );
};

export default App;
