import $ from 'jquery';
import layoutSettingsService from 'services/layout-settings.service';

/*
  Tries to init theme from cache
*/
function initThemeFromCache() {
  const layoutSettings = layoutSettingsService.getLayoutSettings();
  if (layoutSettings && layoutSettings.themeName) {
    initTheme(layoutSettings.themeName);
  }
}

/*
  Sets the a theme to the page
*/
function initTheme(themeName) {
  if (themeName) {
    const url = '/theme-' + themeName + '.css';
    $(document).find('link[data-type="theme"]').attr('href', url);
  }
}

export default { initTheme, initThemeFromCache };
