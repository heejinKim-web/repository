const LIGHT = "toggle/LIGHT";
const DARK = "toggle/DARK";

export const light = () => ({ type: LIGHT });
export const dark = () => ({ type: DARK });

const initialState = {
  mode: false,
};

function mode(state = initialState, action) {
  switch (action.type) {
    case LIGHT:
      return {
        ...state,
        mode: false,
      };
    case DARK:
      return {
        ...state,
        mode: true,
      };
    default:
      return state;
  }
}

export default mode;
