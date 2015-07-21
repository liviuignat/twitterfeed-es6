import HeaderView from 'components/header/header.view';

describe('when the header view is initialized', () => {
  let headerView;
  beforeEach(function (done) {
    headerView = new HeaderView();
    headerView.render().then(done);
  });

  it('should have the correct element', () => {
    expect(headerView.$el.html()).not.toBe('');
  });
});
