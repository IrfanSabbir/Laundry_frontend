import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Privacy from './components/pages/Privacy';
import Dashboard from './components/pages/Dashboard';
import EditDashboard from './components/pages/editDashboard';
import Billing from './components/pages/Billing';
import editBilling from './components/pages/editBilling';
import Preferences from './components/pages/Preferences';
import editPreferences from './components/pages/editPreferences';
import ForgotPassword from './components/pages/ForgotPassword';
import ResetPassword from './components/pages/ResetPassword';
import PrivateRoute from './components/routing/PrivateRoute';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import PreferenceState from './context/preference/PreferenceState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <PreferenceState>
          <Router>
            <>
              <Navbar />
              <div>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/services" component={Services} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/login" component={Login} />
                  <Route
                    exact
                    path="/forgotpassword"
                    component={ForgotPassword}
                  />
                  <Route
                    exact
                    path="/resetpassword"
                    component={ResetPassword}
                  />
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <PrivateRoute
                    exact
                    path="/editdashboard"
                    component={EditDashboard}
                  />
                  <PrivateRoute Route exact path="/billing" component={Billing} />
                  <PrivateRoute
                    Route
                    exact
                    path="/editbilling"
                    component={editBilling}
                  />
                  <PrivateRoute
                    Route
                    exact
                    path="/preferences"
                    component={Preferences}
                  />
                  <PrivateRoute
                    Route
                    exact
                    path="/editPreferences"
                    component={editPreferences}
                  />
                  <Route exact path="/privacy" component={Privacy} />
                </Switch>
              </div>
            </>
          </Router>
        </PreferenceState>
      </AlertState>
    </AuthState>
  );
};

export default App;
