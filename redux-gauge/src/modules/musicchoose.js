const MOTHLITE = "musicchoose/MOTHLITE";
const GUAPO = "musicchoose/GUAPO";
const MIRACLE = "musicchoose/MIRACLE";
const DOS = "musicchoose/DOS";

export const mothlite = () => ({ type: MOTHLITE });
export const guapo = () => ({ type: GUAPO });
export const miracle = () => ({ type: MIRACLE });
export const dos = () => ({ type: DOS });

const initialState = {
  percent: 0,
};

function musicchoose(state = initialState, action) {
  switch (action.type) {
    case MOTHLITE:
      return {
        ...state,
        percent: 90,
      };
    case GUAPO:
      return {
        ...state,
        percent: 50,
      };
    case MIRACLE:
      return {
        ...state,
        percent: 80,
      };
    case DOS:
      return {
        ...state,
        percent: 70,
      };
    default:
      return state;
  }
}

export default musicchoose;
