import LayoutView from 'components/layout/layout.view';

describe('when the layout view is initialized', () => {
  let layoutView;
  beforeEach(function (done) {
    layoutView = new LayoutView();
    layoutView.render().then(done);
  });

  it('should have the correct element', () => {
    expect(layoutView.$el.html()).not.toBe('');
  });
});
