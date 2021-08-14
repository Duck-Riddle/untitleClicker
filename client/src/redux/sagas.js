import { all, spawn, call } from "redux-saga/effects";

import clockSaga from "../features/clock/clockSaga";

export default function* rootSaga () {
    const sagas = [
        clockSaga,
    ];
  
    yield all(sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      }))
    );
  }