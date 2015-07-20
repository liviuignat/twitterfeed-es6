import HeaderView from 'components/header/header.view';

describe('when the header view is initialized', () => {
  let headerView;
  beforeEach(function () {
    headerView = new HeaderView();
  });

  it('should have a render method', () => {
    expect(headerView.render).toBeDefined();
  });
});
