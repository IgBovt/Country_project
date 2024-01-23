import axios from 'axios';

export function getTopData(q, page) {
  return axios.get('https://newsapi.org/v2/top-headlines', {
    params: {
      apiKey: '31d73c075bf1480facfc72f704139b7b',
      q,
      searchIn: 'content',
      sortBy: 'relevancy',
      pageSize: 15,
      page,
      country: 'us',
    },
  });
}
