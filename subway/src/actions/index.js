export const getNewsBySearch = (searchTerm) => ({
  type: 'GET_NEWS_BY_SEARCH',
  payload: { searchTerm }
});

export const receivedNews = (payload) => ({
  type: 'RECEIVED_NEWS',
  payload
});


export const getNextNewsByPage = (pageNumber) => ({
  type: 'GET_NEXT_NEWS_BY_PAGE',
  payload: { pageNumber }
});