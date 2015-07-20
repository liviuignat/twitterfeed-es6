import AppRouter from 'router';
import Backbone from 'backbone';
import HeaderView from 'components/header/header.view';

const headerView = new HeaderView();
headerView.render();

const router = new AppRouter();
Backbone.history.start({ pushState: true, root: '', router: router });
