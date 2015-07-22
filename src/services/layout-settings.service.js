import LayoutModel from 'components/layout/layout.model';
import cacheService from 'services/cache.service';

const CACHE_KEY = 'layout_settings';

/*
  Gets the layout settings stored in cache or fallbacks to default settings
*/
function getLayoutSettings() {
  const cachedLayoutSettings = cacheService.get(CACHE_KEY);
  const layoutSettings = new LayoutModel(cachedLayoutSettings).toJSON();
  return layoutSettings;
}

/*
  Saves layout settings to cache
*/
function saveLayoutSettings(settings) {
  cacheService.set(CACHE_KEY, settings);
}

export default { getLayoutSettings, saveLayoutSettings };
