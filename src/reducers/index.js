import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Courage", duration: "4:05" },
    { title: "Silhoutte", duration: "2:30" },
    { title: "Blood Circulator", duration: "3:30" },
    { title: "Hello Alone", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
