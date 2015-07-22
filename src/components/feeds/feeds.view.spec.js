import FeedsView from 'components/feeds/feeds.view';
import underscoreFormatters from 'common/underscore.formatters';
import feedService from 'services/twitter.service';
import errorMessageText from 'components/feeds/feeds.view.error-message.tpl.html!text';

describe('when the feeds view is initialized and render is invoked', () => {
  let feedsView;
  const feedArray = [{
    id: 543534,
    text: 'Text for mocking purpose'
  }];

  beforeEach(() => {
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
  });

  describe('When the service request is not sucessful', () => {
    beforeEach((done) => {
      spyOn(feedService, 'getFeeds').and.returnValue(Promise.reject(new Error('Endpoint is unreachable')));
      feedsView.render().then(done);
    });

    it('should contain the error message template rendered in the view', () => {
      expect(feedsView.$el.html()).toContain('class="ErrorMessage"');
    });

  });

  describe('When the service is sucessful', () => {
    beforeEach((done) => {
      spyOn(feedService, 'getFeeds').and.returnValue(Promise.resolve(feedArray));
      feedsView.render().then(done);
    });

    it('view collection should contain that feed', () => {
      expect(feedsView.collection.toJSON()).toEqual(feedArray);
    });

    it('should have the feeds rendered html in the view', () => {
      expect(feedsView.$el.html()).toContain(feedsView.collection.at(0).get('text'));
    });

    it('created date shoud be the first column', () => {
      expect(feedsView.$el.find('.FeedsView-createdAt').hasClass('FeedsView-listItem--firstColumn')).toBe(true);
    });

    it('text shoud be the second column', () => {
      expect(feedsView.$el.find('.FeedsView-tweetText').hasClass('FeedsView-listItem--secondColumn')).toBe(true);
    });

    it('link shoud be the third column', () => {
      expect(feedsView.$el.find('.FeedsView-tweetLink').hasClass('FeedsView-listItem--thirdColumn')).toBe(true);
    });

    describe('When layout settings are changing', () => {
      beforeEach((done) => {
        feedsView.layoutSettings = {
          createdAtIndex: 2,
          textIndex: 1,
          linkIndex: 0,
          themeName: 'default',
          numberOfTweets: 30,
          accontNames: '@AppDirect @techcrunch @laughingsquid'
        };
        feedsView.render().then(done);
      });

      it('created date shoud be the third column', () => {
        expect(feedsView.$el.find('.FeedsView-createdAt').hasClass('FeedsView-listItem--thirdColumn')).toBe(true);
      });

      it('text shoud be the second column', () => {
        expect(feedsView.$el.find('.FeedsView-tweetText').hasClass('FeedsView-listItem--secondColumn')).toBe(true);
      });

      it('link shoud be the first column', () => {
        expect(feedsView.$el.find('.FeedsView-tweetLink').hasClass('FeedsView-listItem--firstColumn')).toBe(true);
      });
    });
  });
});
