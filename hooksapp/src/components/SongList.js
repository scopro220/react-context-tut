import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "song1", id: 1 },
    { title: "song2", id: 2 },
    { title: "song3", id: 3 },
  ]);

  const [age, setAge] = useState(21);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv4() }]);
  };

  useEffect(() => {
    console.log("Songs useEffect Hook ran", songs);
  }, [songs]);

  useEffect(() => {
    console.log("Age useEffect Hook ran", age);
  }, [age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to Age: {age}</button>
    </div>
  );
};

export default SongList;
