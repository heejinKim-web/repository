import { takeLatest, put, delay } from "redux-saga/effects";
export const INCREAMENT_REQUEST = "INCREAMENT_REQUEST";
export const INCREAMENT = "INCREAMENT";

export const DECREAMENT_REQUEST = "DECREAMENT_REQUEST";
export const DECREAMENT = "DECREAMENT";

export const increamentRequest = () => ({
  type: INCREAMENT_REQUEST,
});

export const increament = () => ({
  type: INCREAMENT,
});

export const decreamentRequest = () => ({
  type: DECREAMENT_REQUEST,
});

export const decreament = () => ({
  type: DECREAMENT,
});

function* increamentSaga() {
  yield delay(1000);
  yield put(increament());
}

function* decreamentSaga() {
  yield delay(1000);
  yield put(decreament());
}

export function* counterSaga() {
  yield takeLatest(INCREAMENT_REQUEST, increamentSaga);
  yield takeLatest(DECREAMENT_REQUEST, decreamentSaga);
}

const initialState = {
  count: 0,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREAMENT:
      return { ...state, count: state.count + 1 };
    case DECREAMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
