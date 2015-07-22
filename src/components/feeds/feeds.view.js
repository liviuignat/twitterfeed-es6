import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import FeedCollection from 'components/feeds/feed.collection';
import FeedModel from 'components/feeds/feed.model';
import templateText from 'components/feeds/feeds.view.tpl.html!text';
import feedService from 'services/twitter.service';
import layoutSettingsService from 'services/layout-settings.service';

class FeedView extends Backbone.View {
  constructor() {
    super();

    this.collection = new FeedCollection();
    this.layoutSettings = layoutSettingsService.getLayoutSettings();
    this.classMappings = ['firstColumn', 'secondColumn', 'thirdColumn'];
  }

  className() {
    return 'FeedsView';
  }

  render() {
    this.$el.html('<div class="LoadingIndicator">Loading please wait ...</div>');
    $('.PageContent').html(this.$el);

    return feedService.getFeeds().then((feeds) => {
      const models = feeds.map((json) => {
        const model = new FeedModel(json);
        return model;
      });

      this.collection.reset(models);

      this.$el.html(this.template());

      this.restoreColOrder();

      return this;
    });
  }

  template() {
    const compiled = _.template(templateText);
    const html = compiled({ model: this.collection.toJSON() });
    return html;
  }


  /*
    Restores order of the feed column settings from cache to UI
  */
  restoreColOrder() {
    this.$el.find('.FeedsView-createdAt').addClass('FeedsView-listItem--' + this.classMappings[this.layoutSettings.createdAtIndex]);
    this.$el.find('.FeedsView-tweetText').addClass('FeedsView-listItem--' + this.classMappings[this.layoutSettings.textIndex]);
    this.$el.find('.FeedsView-tweetLink').addClass('FeedsView-listItem--' + this.classMappings[this.layoutSettings.linkIndex]);
  }
}

export default FeedView;
