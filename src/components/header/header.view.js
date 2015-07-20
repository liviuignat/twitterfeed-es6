import $ from 'jquery';
import Backbone from 'backbone';
import templateText from 'components/header/header.view.tpl.html!text';

class HeaderView extends Backbone.View {
  render() {
    $('body > header').html(templateText);
  }
}

export default HeaderView;
