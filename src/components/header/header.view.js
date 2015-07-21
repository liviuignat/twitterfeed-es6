import $ from 'jquery';
import Backbone from 'backbone';
import templateText from 'components/header/header.view.tpl.html!text';
import linkNavigation from 'common/link.navigation';

class HeaderView extends Backbone.View {
  className() {
    return 'PageHeaderView';
  }

  render() {
    this.$el.html(templateText);
    $('.PageHeader').html(this.$el);

    linkNavigation.fixRouting();

    return Promise.resolve(this);
  }
}

export default HeaderView;
