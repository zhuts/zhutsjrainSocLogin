import React from 'react';
import { Route, IndexRoute} from 'react-router';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import NotFoundPage from './components/404notfound';
import LoggedInPage from './components/LoggedInPage';

const routes = (
  <Route path="/" component={Layout}>
    <Route path="loggedIn" component={LoggedInPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;