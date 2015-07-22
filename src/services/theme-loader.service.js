import $ from 'jquery';
import cacheService from 'services/cache.service';

const CACHE_KEY = 'layout_settings';

function initThemeFromCache() {
  const layoutSettings = cacheService.get(CACHE_KEY);
  if (layoutSettings && layoutSettings.themeName) {
    initTheme(layoutSettings.themeName);
  }
}

function initTheme(themeName) {
  if (themeName) {
    const url = '/theme-' + themeName + '.css';
    $(document).find('link[data-type="theme"]').attr('href', url);
  }
}

export default { initTheme, initThemeFromCache };
