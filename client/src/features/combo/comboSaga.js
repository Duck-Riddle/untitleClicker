import { delay, fork, put, race, select, take } from "redux-saga/effects";

import { selectCombo as comboState } from "../../redux/selectors";
import { 
    buttonPress,
    buttonRelease,
    comboDecrement,
    toggleOverflow } from "../../redux/actions"

function* handleComboDecrement() {
    while ( true ) {
        yield take(buttonRelease.type)
        let interval = 160
        while ( true ) {

            const combo = yield select(comboState);

            if ( combo.value <= 0 ) break;

            const { breakChain } = yield race({
                breakChain: take(buttonPress.type),
                timeout: delay(interval)
            });

            if ( breakChain ) break;

            if ( !combo.isOverflowing ) {
                yield put( comboDecrement() );
                interval = interval < 50 ? 50 : Math.round(interval*0.85);
            }
        };
    };
}

function* _toggleOverflow(duration) {
    yield put(toggleOverflow(true))
    yield delay(duration)
    yield put(toggleOverflow(false))
    yield put(comboDecrement(true))
}

function* handleComboOverflow() {
    while ( true ) {
        yield take(buttonPress.type)

        const combo = yield select(comboState)

        if (combo.value < combo.ceiling) { } else {
            // remember to make it not statick valiue
            yield _toggleOverflow(5000)
        }
    }
}

export default function* comboSaga() {
    yield fork(handleComboDecrement)
    yield fork(handleComboOverflow)
};