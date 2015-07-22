import Backbone from 'backbone';

class LayoutModel extends Backbone.Model {
  constructor(attributes, options) {
    super(attributes, options);
  }

  defaults() {
    return {
      createdAtIndex: 0,
      textIndex: 1,
      linkIndex: 2,
      themeName: 'default',
      numberOfTweets: 30,
      accontNames: '@AppDirect @techcrunch @laughingsquid'
    };
  }
}

export default LayoutModel;
