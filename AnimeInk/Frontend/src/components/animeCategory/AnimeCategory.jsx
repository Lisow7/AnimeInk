import React, { useState, useEffect } from "react";
import axios from "axios";
import AnimeCard from "../AnimeCard.jsx"; // Assurez-vous d'avoir un composant AnimeCard pour représenter chaque anime
import "./AnimeCategory"; // Import du fichier de style SASS

const AnimeCategory = ({ title, genre }) => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchAnimeByCategory = async () => {
      try {
        // Récupérer les animés pour la catégorie spécifiée
        const response = await axios.get(
          `https://api.jikan.moe/v4/genres/anime?genre=${genre}`
        );
        setAnimeList(response.data.data);
      } catch (error) {
        console.error("Error fetching anime:", error);
      }
    };

    fetchAnimeByCategory();
  }, [genre]); // Assurez-vous de dépendre de la variable genre pour mettre à jour la liste des animés lorsque la catégorie change

  return (
    <div className="anime-category">
      <h2>{title}</h2>
      <div className="anime-list">
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default AnimeCategory;
