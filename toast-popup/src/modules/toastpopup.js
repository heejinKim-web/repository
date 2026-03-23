const OPEN = "toggle/OPEN";
const ALERT = "toggle/ALERT";
const CLOSE = "toggle/CLOSE";

export const open = () => ({ type: OPEN });
export const alert = () => ({ type: ALERT });
export const close = () => ({ type: CLOSE });

const initialState = {
  isOpen: false,
  type: "toast",
  data: null,
};

function toastpopup(state = initialState, action) {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        isOpen: true,
        type: "toast",
        data: "토스트 팝업이 열립니다",
      };
    case ALERT:
      return {
        ...state,
        isOpen: true,
        type: "alert",
        data: "경고 문구가 열립니다",
      };
    case CLOSE:
      return {
        ...state,
        isOpen: false,
        type: "toast",
        data: null,
      };
    default:
      return state;
  }
}

export default toastpopup;
