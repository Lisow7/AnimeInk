import React, { useState, useEffect } from "react";
import axios from "axios";
import AnimeCard from "../components/AnimeCard.jsx"; // Chemin d'importation

function Article() {
  const [animeData, setAnimeData] = useState(null);
  const animeId = 1; // ID de l'anime que tu veux afficher, à remplacer par l'ID réel de l'anime

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime/${animeId}`
        );
        setAnimeData(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'anime:",
          error
        );
      }
    };

    fetchAnimeData();
  }, [animeId]);

  return (
    <div className="article-page">
      <h1>Article sur un anime</h1>
      {animeData && <AnimeCard animeId={1} />}{" "}
      {/* Passer les données de l'anime au composant AnimeCard */}
    </div>
  );
}

export default Article;

// import Picture from "../components/Picture";

// const Article = () => {
//   return (
//     <>
//       <h1 className="start">🧾ARTICLE PAGE🧾</h1>
//       <Picture />
//       <p className="start"> All commentaries here !</p>;
//     </>
//   );
// };

// export default Article;
