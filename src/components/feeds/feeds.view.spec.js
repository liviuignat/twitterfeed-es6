import FeedsView from 'components/feeds/feeds.view';
import underscoreFormatters from 'common/underscore.formatters';

describe('when the feeds view is initialized and render is invoked', () => {
  let feedsView;
  const feedArray = [{
    id: 543534,
    text: 'Text for mocking purpose'
  }];

  beforeEach(function (done) {
    underscoreFormatters.init();
    feedsView = new FeedsView();

    feedsView.layoutSettings = {
      createdAtIndex: 0,
      textIndex: 1,
      linkIndex: 2,
      themeName: 'default',
      numberOfTweets: 30,
      accontNames: '@AppDirect @techcrunch @laughingsquid'
    };
    spyOn(feedsView.feedService, 'getFeeds').and.returnValue(Promise.resolve(feedArray));

    feedsView.render().then(done);
  });

  it('view collection should contain that feed', () => {
    expect(feedsView.collection.toJSON()).toEqual(feedArray);
  });

  it('should have the feeds rendered html in the view', () => {
    expect(feedsView.$el.html()).toContain(feedsView.collection.at(0).get('text'));
  });
});
