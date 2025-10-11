const CHANGE_INPUT = "songs/CHANGE_INPUT";
const CHANGE_LINK = "songs/CHANGE_LINK";
const INSERT = "songs/INSERT";
const REMOVE = "songs/REMOVE";

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

export const changeLink = (link) => ({
  type: CHANGE_LINK,
  link,
});

let id = 3;
export const insert = (input, link) => ({
  type: INSERT,
  song: {
    id: id++,
    input,
    link,
  },
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

const initialState = {
  input: "",
  link: "",
  songs: [
    {
      id: 1,
      input: "Korn - Right Now",
      link: "https://www.musixmatch.com/lyrics/Korn/Right-Now",
    },
    {
      id: 2,
      input: "Draconian - Stellar Tombs",
      link: "https://www.letras.com/draconian/stellar-tombs/",
    },
  ],
};

function songs(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case CHANGE_LINK:
      return {
        ...state,
        link: action.link,
      };
    case INSERT:
      return {
        ...state,
        songs: state.songs.concat(action.song),
      };
    case REMOVE:
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== action.id),
      };
    default:
      return state;
  }
}

export default songs;
