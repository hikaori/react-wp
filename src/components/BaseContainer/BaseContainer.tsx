import React, { Component, Fragment } from 'react';
import {
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';

import {
  LandingPage,
  Movie,
  NotFound,
  Program,
  ECE,
  IT,
  Nadeshiko,
  Nanny,
  Immigration,
  VisaCollection,
  VisaApply,
  School,
} from '../';

class Container extends Component<RouteComponentProps> {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/program" component={Program} />
          <Route exact path="/program/ECE" component={ECE} />
          <Route exact path="/program/it" component={IT} />
          <Route exact path="/program/nadeshiko" component={Nadeshiko} />
          <Route exact path="/program/nanny" component={Nanny} />
          <Route exact path="/program/immigration" component={Immigration} />
          <Route
            exact
            path="/program/immigration/collection"
            component={VisaCollection}
          />
          <Route
            exact
            path="/program/immigration/visa-apply"
            component={VisaApply}
          />
          <Route exact path="/school" component={School} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="404" />
        </Switch>
      </Fragment>
    );
  }
}
export default withRouter(Container);
