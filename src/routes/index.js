import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CoreLayout from 'layouts/CoreLayout';
import HomeView from 'views/HomeView';
import AnalyzeView from 'views/AnalyzeView';
import DiscoverView from 'views/DiscoverView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import NotFoundView from 'views/NotFoundView';

export default (/* store */) => (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path="/analyze" component={AnalyzeView} />
    <Route path="/discover" component={DiscoverView} />
    <Route path="/register" component={RegisterView} />
    <Route path="/login" component={LoginView} />
    <Route path="*" component={NotFoundView} />
  </Route>
);
