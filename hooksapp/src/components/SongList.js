import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "song1", id: 1 },
    { title: "song2", id: 2 },
    { title: "song3", id: 3 },
  ]);

  const addSong = (e) => {
    setSongs([...songs, { title: "new song", id: uuidv4() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;
