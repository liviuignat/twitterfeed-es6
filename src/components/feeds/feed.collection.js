import Backbone from 'backbone';
import FeedModel from 'components/feeds/feed.model';

class FeedCollection extends Backbone.Collection {
  constructor(models, options) {
    super(models, options);
  }

  model() {
    return FeedModel;
  }
}

export default FeedCollection;
