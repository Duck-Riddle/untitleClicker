import { all, put, select, takeEvery } from "redux-saga/effects"

import { selectGeneratorIncome, selectItems, selectScore } from "../../redux/selectors"
import { purchase, updateItems } from "../../redux/actions"
import { regexExcept } from "../../commons/utils"

function* hanndleItemPurchase({payload}) {
    const {value: budget} = yield select(selectScore)
    let cost = payload.cost
    if (payload.formula) {
        cost = payload.formula(payload)
    }
    if ( cost <= budget ) {
        yield put(purchase.finalize(payload, cost))
    } else {
        yield put(purchase.canceled("insuffiecnt budget"))
    }
}

function* hanndleUpdate() {
    const items = yield select(selectItems)
    let totalIncome = 0
    for (let item of items) {
        if (item.type === "Generator") {
            totalIncome += yield select(state => selectGeneratorIncome(state, item))
        }
    }
    yield put(updateItems({income: totalIncome}))
}

const exceptions = ["request", "update"]
const regExAction = action => regexExcept("items", exceptions).test(action.type)

export default function* itemSaga() {
    yield takeEvery(purchase.request.type, hanndleItemPurchase)
    yield takeEvery( action => regExAction(action), hanndleUpdate)
}