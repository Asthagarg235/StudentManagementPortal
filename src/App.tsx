import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
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
