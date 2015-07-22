import $ from 'jquery';
import layoutSettingsService from 'services/layout-settings.service';

function initThemeFromCache() {
  const layoutSettings = layoutSettingsService.getLayoutSettings();
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
