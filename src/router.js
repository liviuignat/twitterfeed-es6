import Backbone from 'backbone';
import FeedsView from 'components/feeds/feeds.view';

class AppRouter extends Backbone.Router {
  constructor() {
    super();
  }

  routes() {
    return {
      '': 'index'
    };
  }

  index() {
    const view = new FeedsView();
    view.render();
  }
}

export default AppRouter;
