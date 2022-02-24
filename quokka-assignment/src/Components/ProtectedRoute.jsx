import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AppContext } from "../Context/Context";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const context = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        context.loginStatus() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
