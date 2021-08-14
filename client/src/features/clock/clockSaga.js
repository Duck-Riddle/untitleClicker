import { all, call, delay, fork, put, select } from "redux-saga/effects"

import { selectWindow, selectClock } from "../../redux/selectors"
import {
    tick as clockTick,
    adjust  as clockAdjust } from "../../redux/actions"

import Time from "./time"


const TICK = 995

function* handleClock(pageId='default') {
    let clockAsync
    while ( true ) {
        yield delay(TICK)
        const [_window, clock] = yield all([
            select(selectWindow),
            select(selectClock)
        ])

        if (_window[pageId]) {
            if (clockAsync) {
                const toSync = yield call(Time.since, clock.current)
                yield put(clockAdjust(toSync))
                clockAsync = false
            }

            yield put(clockTick(Date.now()))
        } else clockAsync = true
    } 
}

export default function* clockSaga() {
    yield fork(handleClock)
}

