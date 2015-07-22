import $ from 'jquery';
import httpService from 'services/http.service';

describe('when saving an object', () => {
  let spy;

  beforeEach(() => {
    spy = spyOn($, 'ajax').and.returnValue({
      done: function (fn) {
        fn();
      },
      fail: function () {}
    });
    httpService.get('http://www.google.com');
  });

  it('should call jqury ajax', () => {
    expect(spy).toHaveBeenCalled();
  });
});
