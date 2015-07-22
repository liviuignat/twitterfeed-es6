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
    return response.map((tweet) => {
      return mapFeeds(tweet);
    });
  });
}

function mapFeeds(tweet) {
  const model = {
    id: tweet.id,
    userId: tweet.user.id,
    userName: tweet.user.name,
    createdAt: new Date(tweet.created_at_formatted),
    isRetweet: isRetweet(tweet),
    text: tweet.text,
    link: 'https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str,
    retweetCount: tweet.retweet_count,
    favoriteCount: tweet.favorite_count,
    mentions: tweet.entities.user_mentions
  };

  if (model.isRetweet) {
    getRetweetUserInfo(model, tweet);
  }

  return model;
}

function isRetweet(tweet) {
  return !!tweet.retweeted_status;
}

function getRetweetUserInfo(model, tweet) {
  model.originalUserId = tweet.retweeted_status.user.id;
  model.originalUserName = tweet.retweeted_status.user.name;
  model.originalScreenName = tweet.retweeted_status.user.screen_name;
}

export default {
  getFeeds
};
