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
  NewsList,
  News,
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
  Teen,
  SummerCamp,
  ServicePrice,
  TeenServicePrice,
  About,
  Company,
  Staff,
  JobList,
  Job,
  HelpfulInfo,
  Insurance,
  Etransfer,
  StudentVisaApply,
  WhVisaApply,
  BiometricsJp,
  BiometricsSea,
  Contact,
  TermsOfService,
  PrivacyPolicy,
  EceSchool,
  ItSchool,
} from '../';

class Container extends Component<RouteComponentProps> {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/news-list" component={NewsList} />
          <Route exact path="/news-list/:id" component={News} />
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
          <Route exact path="/school/ece" component={EceSchool} />
          <Route exact path="/school/it" component={ItSchool} />
          <Route exact path="/school/teen" component={Teen} />
          <Route exact path="/school/summercamp" component={SummerCamp} />
          <Route exact path="/service-price" component={ServicePrice} />
          <Route
            exact
            path="/service-price/teen-service-price"
            component={TeenServicePrice}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/about/company" component={Company} />
          <Route exact path="/about/staff" component={Staff} />
          <Route exact path="/about/job-list" component={JobList} />
          <Route exact path="/about/job-list/:id" component={Job} />
          <Route exact path="/helpful-info" component={HelpfulInfo} />
          <Route exact path="/helpful-info/e-transfer" component={Etransfer} />
          <Route exact path="/helpful-info/insurance" component={Insurance} />
          <Route
            exact
            path="/helpful-info/student-visa-apply"
            component={StudentVisaApply}
          />
          <Route
            exact
            path="/helpful-info/wh-visa-apply"
            component={WhVisaApply}
          />
          <Route
            exact
            path="/helpful-info/biometrics-japan"
            component={BiometricsJp}
          />
          <Route
            exact
            path="/helpful-info/biometrics-seattle"
            component={BiometricsSea}
          />
          <Route exact path="/terms-of-service" component={TermsOfService} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="404" />
        </Switch>
      </Fragment>
    );
  }
}
export default withRouter(Container);
