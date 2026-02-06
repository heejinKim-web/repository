import { takeLatest, put, delay } from "redux-saga/effects";
export const INCREAMENT_REQUEST = "INCREAMENT_REQUEST";
export const INCREAMENT = "INCREAMENT";

export const increamentRequest = () => ({
  type: INCREAMENT_REQUEST,
});

export const increament = () => ({
  type: INCREAMENT,
});

function* increamentSaga() {
  yield delay(1000);
  yield put(increament());
}

export function* counterSaga() {
  yield takeLatest(INCREAMENT_REQUEST, increamentSaga);
}

const initialState = {
  count: 0,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREAMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
