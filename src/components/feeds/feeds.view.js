import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import FeedCollection from 'components/feeds/feed.collection';
import FeedModel from 'components/feeds/feed.model';
import templateText from 'components/feeds/feeds.view.tpl.html!text';
import feedServiceInstance from 'services/twitter.service';

class FeedView extends Backbone.View {
  constructor() {
    super();
    this.feedService = feedServiceInstance;
    this.collection = new FeedCollection();
  }

  className() {
    return 'body > section';
  }

  render() {
    return this.feedService.getFeeds().then((feeds) => {
      const models = feeds.map((json) => {
        const model = new FeedModel(json);
        return model;
      });

      this.collection.reset(models);

      this.$el.html(this.template());

      $(this.className()).html(this.$el);

      return this;
    });
  }

  template() {
    const compiled = _.template(templateText);
    const html = compiled({ model: this.collection.toJSON() });
    return html;
  }
}

export default FeedView;
