import layoutSettingsService from 'services/layout-settings.service';
import LayoutModel from 'components/layout/layout.model';
import cacheService from 'services/cache.service';

const CACHE_KEY = 'layout_settings';
const defaultData = new LayoutModel().toJSON();

describe('when getting layout settings initially', () => {
  let spy;
  let settings;

  beforeEach(() => {
    cacheService.clear();
    spy = spyOn(cacheService, 'get').and.callThrough();
    settings = layoutSettingsService.getLayoutSettings();
  });

  it('should call cache service get', () => {
    expect(spy).toHaveBeenCalledWith(CACHE_KEY);
  });

  it('should return default values because there was no initial save ', () => {
    expect(settings).toEqual(defaultData);
  });
});

describe('when saving layout settings', () => {
  let spy;
  const newSettings = {
    createdAtIndex: 2,
    textIndex: 1,
    linkIndex: 0,
    themeName: 'some theme',
    numberOfTweets: 10,
    accontNames: '@liviu_ignat'
  };

  beforeEach(() => {
    cacheService.clear();
    spy = spyOn(cacheService, 'set').and.callThrough();
    layoutSettingsService.saveLayoutSettings(newSettings);
  });

  afterEach(() => {
    cacheService.clear();
  });

  it('should call cache service set', () => {
    expect(spy).toHaveBeenCalledWith(CACHE_KEY, newSettings);
  });

  describe('when getting layout settings after save', () => {
    let spyGet;
    let settingsAfterSave;

    beforeEach(() => {
      spyGet = spyOn(cacheService, 'get').and.callThrough();
      settingsAfterSave = layoutSettingsService.getLayoutSettings();
    });

    it('should call cache service get', () => {
      expect(spyGet).toHaveBeenCalledWith(CACHE_KEY);
    });

    it('should returnalready saved settings', () => {
      expect(settingsAfterSave).toEqual(newSettings);
    });
  });
});
