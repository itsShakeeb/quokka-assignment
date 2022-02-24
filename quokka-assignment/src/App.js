import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ProtectedRoute from "./Components/ProtectedRoute";
import "./App.css";
import routes from "./routes";

const Login = lazy(() => import("./views/Login/Login"));

function App() {
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("isLoggedIn"))) {
      localStorage.setItem("isLoggedIn", JSON.stringify(false));
    }
  }, []);

  return (
    <div className=''>
      <BrowserRouter>
        <Suspense fallback='Loading...'>
          <Switch>
            <Route path='/login' exact component={Login} />
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <ProtectedRoute
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    component={route.component}
                  />
                )
              );
            })}
            <Redirect to='/login' />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
