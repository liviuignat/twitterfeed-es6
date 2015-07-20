import httpService from 'services/http.service';

const SERVICE_URL = 'http://twitter-cors.herokuapp.com/feed';

function getFeeds() {
  return httpService.get(SERVICE_URL).then((response) => {
    return response.map((model) => {
      return {
        id: model.id,
        userId: model.user.id,
        userName: model.user.name,
        createdAt: model.created_at,
        text: model.text,
        link: model.source,
        retweetCount: model.retweet_count,
        favoriteCount: model.favorite_count,
        mentions: model.entities.user_mentions
      };
    });
  });
}

export default {
  getFeeds
};
