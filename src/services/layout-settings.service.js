import LayoutModel from 'components/layout/layout.model';
import cacheService from 'services/cache.service';

const CACHE_KEY = 'layout_settings';

function getLayoutSettings() {
  const cachedLayoutSettings = cacheService.get(CACHE_KEY);
  const layoutSettings = new LayoutModel(cachedLayoutSettings).toJSON();
  return layoutSettings;
}

function saveLayoutSettings(settings) {
  cacheService.set(CACHE_KEY, settings);
}

export default { getLayoutSettings, saveLayoutSettings };
