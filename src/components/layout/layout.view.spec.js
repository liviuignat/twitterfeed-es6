import LayoutView from 'components/layout/layout.view';
import cacheServiceInstance from 'services/cache.service';

describe('when the layout view is initialized', () => {
  let layoutView;
  let spyCacheGet;
  const CACHE_KEY = 'layout_settings';

  beforeEach(function (done) {
    spyCacheGet = spyOn(cacheServiceInstance, 'get');

    layoutView = new LayoutView();
    layoutView.render().then(done);
  });

  it('should have the correct element', () => {
    expect(layoutView.$el.html()).not.toBe('');
  });

  it('should get the model from cache', () => {
    expect(spyCacheGet).toHaveBeenCalledWith(CACHE_KEY);
  });

  describe('when form is saved', () => {
    let spyCacheSet;

    beforeEach(function () {
      spyCacheSet = spyOn(cacheServiceInstance, 'set');
      layoutView.save();
    });

    it('should save data into the cache', () => {
      expect(spyCacheSet).toHaveBeenCalledWith(CACHE_KEY, layoutView.model.toJSON());
    });
  });
});
