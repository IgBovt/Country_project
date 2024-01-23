import axios from 'axios';

export function getData(q, page) {
  return axios.get('https://newsapi.org/v2/everything', {
    params: {
      apiKey: '31d73c075bf1480facfc72f704139b7b',
      q,
      searchIn: 'content',
      sortBy: 'relevancy',
      pageSize: 15,
      page,
      Authorization: '31d73c075bf1480facfc72f704139b7b',
    },
  });
}
