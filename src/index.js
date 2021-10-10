import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import PreferenceState from './context/preference/PreferenceState';

ReactDOM.render(
  <AuthState>
    <AlertState>
      <PreferenceState>
        <App />
      </PreferenceState>
    </AlertState>
  </AuthState>
, document.getElementById('root'));
