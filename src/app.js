import AppRouter from 'router';
import Backbone from 'backbone';
import underscoreFormatters from 'common/underscore.formatters';
import themeLoaderService from 'services/theme-loader.service';
import HeaderView from 'components/header/header.view';

underscoreFormatters.init();
themeLoaderService.initThemeFromCache();

const headerView = new HeaderView();
headerView.render();

const router = new AppRouter();
Backbone.Router.current = router;

Backbone.history.start({
  pushState: true,
  root: ''
});
