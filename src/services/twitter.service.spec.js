/*
  Integration test.
  This test will make the request to the server and test if the request is successful
*/

import twitterService from 'services/twitter.service';

describe('when getting twitter feeds', () => {
  let feeds = [];
  beforeEach((done) => {
    twitterService.getFeeds().then((result) => {
      feeds = result;
      done();
    });
  });

  it('should have 90 feeds', () => {
    expect(feeds.length).toBe(90);
  });
});
