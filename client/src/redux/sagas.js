import { all, spawn, call } from "redux-saga/effects";

import clockSaga from "../features/clock/clockSaga";
import buttonSaga from "../features/button/buttonSaga"
import comboSaga from "../features/combo/comboSaga"

export default function* rootSaga () {
    const sagas = [
        clockSaga,
        buttonSaga,
        comboSaga,
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