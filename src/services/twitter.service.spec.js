import twitterService from 'services/twitter.service';
import httpService from 'services/http.service';

describe('when getting twitter feeds', () => {
  let feeds = [];
  const returnObject = [
    {
      id: 4982394238,
      user: {
        id: 4423,
        name: 'Liviu Ignat'
      },
      entities: {
      }
    }
  ];

  beforeEach((done) => {
    spyOn(httpService, 'get').and.returnValue(Promise.resolve(returnObject));
    twitterService.getFeeds().then((result) => {
      feeds = result;
      done();
    });
  });

  it('should return 1 feed', () => {
    expect(feeds.length).toEqual(1);
  });
});
