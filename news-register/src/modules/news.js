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
  news: {
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
  newsList: [
    {
      id: 1,
      input: '[속보] 법무부 "쿠팡 美주주, 韓정부에 ISDS 중재의향서 제출"',
      link: "https://n.news.naver.com/article/001/0015862656?cds=news_media_pc&type=editn",
    },
    {
      id: 2,
      input: "한동훈 제명에 '잘했다' 43%…'잘못' 38%보다 많아",
      link: "https://n.news.naver.com/article/053/0000055233?cds=news_media_pc&type=editn",
    },
  ],
};

function news(state = initialState, action) {
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
        newsList: state.newsList.concat(action.news),
      };
    case REMOVE:
      return {
        ...state,
        newsList: state.newsList.filter((news) => news.id !== action.id),
      };
    default:
      return state;
  }
}

export default news;
