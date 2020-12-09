import React, { useState } from "react";
import "./styles.css";
import artists from "./artists";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("r&b");

  const setGenre = (genre) => {
    setSelectedGenre(genre);
  };

  const renderList = artists[selectedGenre].map((artist) => {
    return (
      <div className="artist flex">
        <div className="image">
          <img src={artist.url} alt={artist.name} />
        </div>
        <div className="content">
          <p className="name">{artist.name.toUpperCase()}</p>
          <p className="songs">{artist.songs}</p>
        </div>
      </div>
    );
  });
  const genres = Object.keys(artists).map((genre, id) => {
    return (
      <div className="pills">
        <span key={id} onClick={() => setGenre(genre)}>
          {genre.toUpperCase()}
        </span>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>🎧Artist Recommender</h1>
      <h6>Where you find new artists and their songs based on genre</h6>
      <hr />
      <div className="container-pill">{genres}</div>
      <div className="container-artists">{renderList}</div>
    </div>
  );
}
