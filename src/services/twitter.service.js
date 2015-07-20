import httpService from 'services/http.service';

function getFeeds() {
  return httpService.get('/');
}

export default {
  getFeeds
};
