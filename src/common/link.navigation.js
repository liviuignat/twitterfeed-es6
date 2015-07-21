import $ from 'jquery';
import Backbone from 'backbone';

function fixRouting() {
  $(document).find('a[data-nav]').on('click', (event) => {
    const href = $(event.currentTarget).attr('href');

    Backbone.Router.current.navigate(href, {
      trigger: true
    });
    return false;
  });
}

export default {
  fixRouting
};
