import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user.admin ? 
      (
        <Component {...props} />
        // console.log("admin", user)
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute