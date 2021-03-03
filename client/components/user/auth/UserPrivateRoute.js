import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth-helper";

export default function UserPrivateRoute({
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/registered_user/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
} 