import React, { useState, useEffect } from "react";
import axios from "axios";
import AnimeCard from "../AnimeCard.jsx";

const AnimeNews = () => {
  const [newAnimeList, setNewAnimeList] = useState([]);

  useEffect(() => {
    const fetchNewAnime = async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/top/anime");
        setNewAnimeList(response.data.data.slice(0, 3)); // Limite à 10 animes
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des nouveaux animés:",
          error
        );
      }
    };

    fetchNewAnime();
  }, []);

  return (
    <div className="news-anime-section">
      <h2>Nouveaux animés</h2>
      <div className="anime-list">
        {newAnimeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default AnimeNews;
