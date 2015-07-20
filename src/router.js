import Backbone from 'backbone';

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
  }
}

export default AppRouter;
