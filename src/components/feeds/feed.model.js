import Backbone from 'backbone';

class FeedModel extends Backbone.Model {
  constructor(attributes, options) {
    super(attributes, options);
  }

  idAttribute() {
    return 'id';
  }

  defaults() {
    return {
      id: 0
    };
  }
}

export default FeedModel;
