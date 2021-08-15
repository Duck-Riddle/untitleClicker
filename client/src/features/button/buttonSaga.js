import { delay, fork, put, race, take } from "redux-saga/effects";

import {
    buttonPress,
    buttonRelease } from "../../redux/actions"

function* handleByttonRelease() {
    while ( true ) {
        yield take(buttonPress.type)
        while ( true ) {
            const { timeout } = yield race({
                buttonPressed: take(buttonPress.type),
                timeout: delay(150)
            })
            if (timeout) {
                yield put(buttonRelease())
                break
            }
        }
    }
}


export default function* buttonSaga() {
    yield fork(handleByttonRelease)
}