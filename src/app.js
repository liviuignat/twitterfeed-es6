import AppRouter from 'router';
import Backbone from 'backbone';
import underscoreFormatters from 'common/underscore.formatters';
import HeaderView from 'components/header/header.view';

underscoreFormatters.init();

const headerView = new HeaderView();
headerView.render();

const router = new AppRouter();
Backbone.Router.current = router;
Backbone.history.start({
  pushState: true,
  root: '',
  router: router
});
