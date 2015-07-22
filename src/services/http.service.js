import $ from 'jquery';

function get(url) {
  $.support.cors = true;

  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      success: function (result) {
        resolve(result);
      },
      error: function () {
        reject(new Error('Error making the request'));
      }
    });
  });
}

export default {
  get
};
