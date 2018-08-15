import { takeEvery, put, call, all } from "redux-saga/effects";

import { GET_STORY } from "../constants/actions";
import {
    getStorySuccess,
    getStoryError,
    setLoading
} from "../actions";
import request from "../utils/request";

async function getItem(id) {
    const response = await request(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    return response.json;
}

function* getStory(action) {
    yield put(setLoading(GET_STORY, true));
    try {
        const { id } = action;
        const story = yield call(getItem, id);
        const pArr = story.kids.map(getItem);
        const comments = yield all(pArr);
        yield put(getStorySuccess({
            ...story,
            comments
        }));
    } catch(ex) {
        console.log(ex);
        yield put(getStoryError(ex));
    }
    yield put(setLoading(GET_STORY, false));
};

export default function* () {
    yield takeEvery(GET_STORY, getStory);
}
