import { takeEvery, put, call } from "redux-saga/effects";

import { GET_INDEX } from "../constants/actions";
import {
    getIndexSuccess,
    getIndexError,
    setLoading
} from "../actions";
import request from "../utils/request";

async function getItem(id) {
    const response = await request(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    return response.json;
}
async function getLatestItemId() {
    const response = await request(
        "https://hacker-news.firebaseio.com/v0/maxitem.json"
    );
    return response.json;
}
function* getIndex() {
    const stories = [];
    yield put(setLoading(GET_INDEX, true));
    try {
        let id = yield call(getLatestItemId);
        while(stories.length < 10) {
            const item = yield call(getItem, id);
            if(item && item.type === "story") {
                stories.push(item);
            }
            if(item && item.parent)
                id = item.parent;
            else
                id -= 1;
        }
        yield put(getIndexSuccess(stories));
    } catch(ex) {
        console.log(ex);
        yield put(getIndexError(ex));
    }
    yield put(setLoading(GET_INDEX, false));
};

export default function* () {
    yield takeEvery(GET_INDEX, getIndex);
}
