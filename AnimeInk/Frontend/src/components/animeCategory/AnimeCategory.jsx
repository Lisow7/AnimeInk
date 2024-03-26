import { useState, useEffect } from "react";

import axios from "axios";
import PropTypes from "prop-types";

import AnimeCard from "../AnimeCard.jsx";

const AnimeCategory = ({ title, genre }) => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(
    () => {
      const fetchAnimeByCategory = async () => {
        try {
          // Récupérer les animés pour le genre / la catégorie spécifiée
          const response = await axios.get(
            `https://api.jikan.moe/v4/genres/anime?genre=${genre}`
          );
          setAnimeList(response.data.data);
        } catch (error) {
          console.error("Error fetching anime:", error);
        }
      };

      fetchAnimeByCategory();
    },
    // La variable "genre" dans le arr met à jour la liste des animés lorsque la catégorie change
    [genre]
  );
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

// Les propTypes servent à valider les types de données passées à un composant React, facilitant ainsi la détection d'erreurs et la documentation du code.
AnimeCategory.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default AnimeCategory;
