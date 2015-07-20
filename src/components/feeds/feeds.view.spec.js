import FeedsView from 'components/feeds/feeds.view';

describe('when the feeds view is initialized and render is invoked', () => {
  let feedsView;
  beforeEach(function (done) {
    feedsView = new FeedsView();
    feedsView.render().then(done);
  });

  it('should have the feeds rendered html in the view', () => {
    expect(feedsView.$el.html()).toContain(feedsView.collection.at(0).get('text'));
  });
});
