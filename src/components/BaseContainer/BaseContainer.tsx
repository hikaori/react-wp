import React, { Component, Fragment } from 'react';
import {
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';

import { Movie, NotFound } from '../';

class Container extends Component<RouteComponentProps> {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Movie} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="404" />
        </Switch>
      </Fragment>
    );
  }
}
export default withRouter(Container);
