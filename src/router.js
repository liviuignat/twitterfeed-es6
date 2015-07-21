import Backbone from 'backbone';
import FeedsView from 'components/feeds/feeds.view';
import LayoutView from 'components/layout/layout.view';

class AppRouter extends Backbone.Router {
  constructor() {
    super();
  }

  routes() {
    return {
      '': 'index',
      'layout': 'layout'
    };
  }

  index() {
    const view = new FeedsView();
    view.render();
  }

  layout() {
    const view = new LayoutView();
    view.render();
  }
}

export default AppRouter;

