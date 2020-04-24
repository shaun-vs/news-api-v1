import { put, takeLatest, all, select } from 'redux-saga/effects';
import { PAGE_SIZE, MAIN_REQUEST_URL } from "../constants";
import { receivedNews } from '../actions/index';


function* getNewsBySearch(action) {

  const req = new Request(`${MAIN_REQUEST_URL}&q=${action.payload.searchTerm}&pageSize=${PAGE_SIZE}&page=1`);


  const response = yield fetch(req)
    .then((resp) => {
      return resp.json();
      

    })
    .then((resp2) => {
      
      return resp2;

    })
    .catch((err) => {

    });

    yield put(receivedNews({searchTerm: action.payload.searchTerm, newsResults: response.articles, pageNumbers: (Number(response.totalResults) / PAGE_SIZE)}));
    

}

function* getNextNewsPage(action) {

  const state = yield select();
  const searchTerm = state.searchTerm;

  const req = new Request(`${MAIN_REQUEST_URL}&q=${searchTerm}&pageSize=${PAGE_SIZE}&page=${action.payload.pageNumber}`);


  const response = yield fetch(req)
    .then((resp) => {

      return resp.json();

    })
    .then((resp2) => {
      
      return resp2;

    })
    .catch((err) => {

    });
  yield put(receivedNews({newsResults: response.articles, pageNumbers: (Number(response.totalResults) / PAGE_SIZE)}));

}


export default function* rootSaga() {
  yield all([
    takeLatest('GET_NEWS_BY_SEARCH', getNewsBySearch),
    takeLatest('GET_NEXT_NEWS_BY_PAGE', getNextNewsPage),
  ]);
}