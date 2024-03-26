import { useState, useEffect } from "react";

import axios from "axios";

import AnimeCard from "../AnimeCard.jsx";

const AnimeRandom = () => {
  const [randomAnimeList, setRandomAnimeList] = useState([]);

  useEffect(() => {
    const fetchRandomAnime = async () => {
      try {
        const response = await axios.get(
          "https://api.jikan.moe/v4/random/anime"
        );
        setRandomAnimeList(response.data.data.slice(0, 3)); // Limite à 3 animes
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des animes aléatoires:",
          error
        );
      }
    };

    fetchRandomAnime();
  }, []);

  return (
    <div className="random-anime-section">
      <h2>Animes aléatoires</h2>
      <div className="anime-list">
        {randomAnimeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default AnimeRandom;
