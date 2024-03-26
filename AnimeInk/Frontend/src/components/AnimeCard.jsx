import { useState, useEffect } from "react";

import axios from "axios";
import PropTypes from "prop-types";

function AnimeCard({ animeId }) {
  const [animeData, setAnimeData] = useState(null);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime/${animeId}`
        );
        setAnimeData(response.data.data); // Note : Utilisation de response.data.data pour accéder aux données de l'anime dans la réponse de l'API
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'anime:",
          error
        );
      }
    };

    fetchAnimeData();
  }, [animeId]);

  if (!animeData) {
    return <div>Chargement...</div>;
  }

  const {
    titles,
    images,
    // trailer,
    // status,
    // aired,
    episodes,
    // synopsis,
    // genres,
    // studios,
    score,
    // ranked,
    // popularity,
    // favorites,
    // members,
    // licensors,
    // producers,
  } = animeData;

  return (
    <div className="anime-card">
      <img
        src={images.jpg.image_url}
        alt={titles[0].title}
        className="anime-card__image"
      />
      <div className="anime-card__details">
        <h2 className="anime-card__title">{titles[0].title}</h2>
        <p className="anime-card__score">Score: {score}</p>
        <p className="anime-card__episodes">Épisodes: {episodes}</p>
      </div>
    </div>
  );
}

// Les propTypes servent à valider les types de données passées à un composant React, facilitant ainsi la détection d'erreurs et la documentation du code.
AnimeCard.propTypes = {
  animeId: PropTypes.number.isRequired,
};

export default AnimeCard;
