import $ from 'jquery';

function get(url) {
  return new Promise((resolve, reject) => {
    $.ajax(url).done((result) => {
      resolve(result);
    }).fail((err) => {
      reject(err);
    });
  });
}

export default {
  get
};
