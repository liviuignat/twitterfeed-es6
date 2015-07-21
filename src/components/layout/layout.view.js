import $ from 'jquery';
import Backbone from 'backbone';
import templateText from 'components/layout/layout.view.tpl.html!text';

class LayoutView extends Backbone.View {
  className() {
    return 'LayoutView';
  }

  render() {
    this.$el.html(templateText);
    $('.PageContent').html(this.$el);
    return Promise.resolve(this);
  }
}

export default LayoutView;
