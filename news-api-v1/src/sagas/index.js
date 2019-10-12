import { put, takeLatest, all } from 'redux-saga/effects';
import { PAGE_SIZE, MAIN_REQUEST_URL } from "../constants";
import { receivedNews } from '../actions/index';


function* getNewsBySearch(payload) {

  const req = `${MAIN_REQUEST_URL}?q=${payload.searchTerm}&pageSize=${PAGE_SIZE}&page=1`;

  let response = '';

  yield fetch(req)
    .then((resp) => {

      response = resp.json();
      console.log(response)

    })
    .catch((err) => {

    });

    yield put(receivedNews({newsResults: response.articles, resultCount: response.totalResults}));

}

function* getNextNewsPage(payload) {

  const req = `${MAIN_REQUEST_URL}&pageSize=${PAGE_SIZE}&page=${payload.pageNumber}`;

  let response = '';

  yield fetch(req)
    .then((resp) => {

      response = resp.json();

    })
    .catch((err) => {

    });
  yield put(receivedNews({newsResults: response.articles, resultCount: response.totalResults}));

}


export default function* rootSaga() {
  yield all([
    takeLatest('GET_NEWS_BY_SEARCH', getNewsBySearch),
    takeLatest('GET_NEXT_NEWS_BY_PAGE', getNextNewsPage),
  ]);
}