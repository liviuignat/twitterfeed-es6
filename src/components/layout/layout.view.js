import $ from 'jquery';
import ui from 'jquery-ui';
import _ from 'underscore';
import Backbone from 'backbone';
import LayoutModel from 'components/layout/layout.model';
import templateText from 'components/layout/layout.view.tpl.html!text';
import cacheService from 'services/cache.service';
import themeLoaderService from 'services/theme-loader.service';

const CACHE_KEY = 'layout_settings';

class LayoutView extends Backbone.View {
  constructor() {
    super();

    const json = cacheService.get(CACHE_KEY);
    this.model = new LayoutModel(json);
  }

  className() {
    return 'LayoutView';
  }

  events() {
    return {
      'submit form': 'save',
      'change [name="themeName"]': 'changed',
      'change [name="numberOfTweets"]': 'changed',
      'change [name="accontNames"]': 'changed'
    };
  }

  render() {
    this.$el.html(this.template());
    $('.PageContent').html(this.$el);

    this.$sortableList = this.$el.find('.LayoutView-sortableList');
    this.$createdAt = this.$el.find('.createdAt');
    this.$tweetText = this.$el.find('.tweetText');
    this.$tweetLink = this.$el.find('.tweetLink');

    this.restoreColOrder();

    this.$sortableList.sortable();
    this.$sortableList.disableSelection();

    return Promise.resolve(this);
  }

  template() {
    const compiled = _.template(templateText);
    const html = compiled({ model: this.model.toJSON() });
    return html;
  }

  save(evt) {
    if (evt) {
      evt.preventDefault();
    }

    this.updateColOrder();

    const json = this.model.toJSON();
    cacheService.set(CACHE_KEY, json);
    themeLoaderService.initTheme(json.themeName);
  }

  updateColOrder() {
    const createdAtIndex = this.$sortableList.children().index(this.$createdAt);
    const textIndex = this.$sortableList.children().index(this.$tweetText);
    const linkIndex = this.$sortableList.children().index(this.$tweetLink);

    this.model.set('createdAtIndex', createdAtIndex);
    this.model.set('textIndex', textIndex);
    this.model.set('linkIndex', linkIndex);
  }

  restoreColOrder() {
    const cols = [];
    cols[this.model.get('createdAtIndex')] = this.$createdAt;
    cols[this.model.get('textIndex')] = this.$tweetText;
    cols[this.model.get('linkIndex')] = this.$tweetLink;

    this.$sortableList.children().remove();

    for (let counter = 0; counter < cols.length; counter++) {
      this.$sortableList.append(cols[counter]);
    }
  }

  changed(evt) {
    const data = {};
    data[evt.currentTarget.name] = evt.currentTarget.value;
    this.model.set(data);
  }
}

export default LayoutView;
