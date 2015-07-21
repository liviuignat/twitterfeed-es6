import _ from 'underscore';
import moment from 'moment';

moment.locale('en', {
  calendar: {
    lastDay: '[Yesterday at] LT',
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    lastWeek: 'lll',
    nextWeek: 'lll',
    sameElse: 'lll'
  }
});

function init() {
  _.template.formatDate = (date) => {
    if (!date) {
      return '';
    }
    return moment(date).calendar();
  };
}

export default {
  init
};
