import axios from "axios";
import { useState, useEffect } from "react";

const AnimesMoments = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.jikan.moe/v4/anime/%7Bid%7D/reviews"
        );
        setAnimeList(response.data);
        return [response.data];
      } catch (error) {
        console.error("erreur lors de la récuperation de données :", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Liste des Animes du moments</h1>
        <ul>
          {animeList.map((anime) => {
            <li key={anime.mal_id}>
              <h3>{anime.user.username}</h3>
              <img src={anime.image_url} alt={anime.title} />
              <p>{anime.synopsis}</p>
            </li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default AnimesMoments;
