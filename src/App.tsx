import { FC, memo, Suspense, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LS_LOGIN_TOKEN } from './api/base';
//import AppContainerPageLazy from './pages/AppContainerPage/AppContainer.lazy';
//import AuthPageLazy from './pages/Auth/AuthPage.lazy';
import { User } from './models/User';
import AppContainerPage from './pages/AppContainerPage/AppContainer.page';
import AuthPage from './pages/Auth/Auth.page';
import { me } from './api';

interface Props{}

const App: FC<Props> = () => {
  const [user, setUser] = useState<User>();
  const token = localStorage.getItem(LS_LOGIN_TOKEN);

  useEffect(() => {
    if(!token){
      return;
    }
    me().then(u => setUser(u));
  }, []);
  console.log("App rerendering and token is " + token);

if(!user && token){
  return <div> Loading...</div>
}

  return (
    
    <Suspense fallback={<div className="text-red-500">Loading App container page</div>}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login"/>}
        </Route>
        <Route path={["/login","/signup"]}>
        {user ? (<Redirect to="/dashboard"/>): 
              (<AuthPage onLogin={setUser}/>
              )}
        </Route>
        <Route path={["/dashboard","/recordings"]} exact>
          
          {user ? <AppContainerPage/> : <Redirect to="/login"/>}
         
        </Route>
      </Switch>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
