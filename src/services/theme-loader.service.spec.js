import $ from 'jquery';
import themeLoaderService from 'services/theme-loader.service';

describe('when initializing theme', () => {
  const themeName = 'newtheme';
  beforeEach(() => {
    $(document).find('head').append('<link rel="stylesheet" href="/theme-default.css" data-type="theme">');
    themeLoaderService.initTheme(themeName);
  });

  afterEach(() => {
    $(document).find('link[data-type="theme"]').remove();
  });

  it('should call jqury ajax', () => {
    const theme = $(document).find('link[data-type="theme"]').attr('href');
    const expectedUrl = '/theme-' + themeName + '.css';
    expect(theme).toContain(expectedUrl);
  });
});
