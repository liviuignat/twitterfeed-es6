import LayoutView from 'components/layout/layout.view';
import layoutSettingsService from 'services/layout-settings.service';

describe('when the layout view is initialized', () => {
  let layoutView;
  let spyGet;
  const modelJson = {
    createdAtIndex: 2,
    textIndex: 1,
    linkIndex: 0,
    themeName: 'default',
    numberOfTweets: 30,
    accontNames: '@AppDirect @techcrunch @laughingsquid'
  };

  beforeEach(function (done) {
    spyGet = spyOn(layoutSettingsService, 'getLayoutSettings');

    layoutView = new LayoutView();
    layoutView.model.set(modelJson);
    layoutView.render().then(done);
  });

  it('should have the correct element', () => {
    expect(layoutView.$el.html()).not.toBe('');
  });

  it('should get the model from the theme loader', () => {
    expect(spyGet).toHaveBeenCalled();
  });

  it('created date shoud be the third column', () => {
    const index = layoutView.$sortableList.children().index(layoutView.$createdAt);
    expect(index).toBe(2);
  });

  it('text shoud be the second column', () => {
    const index = layoutView.$sortableList.children().index(layoutView.$tweetText);
    expect(index).toBe(1);
  });

  it('link shoud be the first column', () => {
    const index = layoutView.$sortableList.children().index(layoutView.$tweetLink);
    expect(index).toBe(0);
  });

  describe('when form is saved', () => {
    let spySet;

    beforeEach(function () {
      spySet = spyOn(layoutSettingsService, 'saveLayoutSettings');
      layoutView.save();
    });

    it('should save data into the cache', () => {
      expect(spySet).toHaveBeenCalledWith(layoutView.model.toJSON());
    });
  });
});
