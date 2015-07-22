import httpService from 'services/http.service';
import layoutSettingsService from 'services/layout-settings.service';

const SERVICE_URL = 'http://twitter-cors.herokuapp.com/feed';

/*
  Loads the feeds. Takes into consideration the layout settings for feed count and user names.
*/
function getFeeds() {
  const layoutSettings = layoutSettingsService.getLayoutSettings();
  const userNamesParam = layoutSettings.accontNames
    .replace(new RegExp(' ', 'g'), ',')
    .replace(new RegExp('@', 'g'), '');

  const url = SERVICE_URL +
    '?count=' + layoutSettings.numberOfTweets +
    '&user_names=' + userNamesParam;

  return httpService.get(url).then((response) => {
    return response.map((model) => {
      return {
        id: model.id,
        userId: model.user.id,
        userName: model.user.name,
        createdAt: new Date(model.created_at_formatted),
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
