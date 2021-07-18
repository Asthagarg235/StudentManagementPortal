import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/Login.page';
import SignupPage from './pages/Signup.page';
import DashboardPage from './pages/Dashboard.page';
import RecordingsPage from './pages/Recordings.page';
import AuthPage from './pages/Auth.page';
import AppContainerPage from './pages/AppContainer.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
            <Redirect to="/auth/login"></Redirect>
        </Route>
        <Route path="/auth">
          <AuthPage></AuthPage>
        </Route>
        <Route path={["/dashboard","/recordings"]}>
          <AppContainerPage></AppContainerPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
