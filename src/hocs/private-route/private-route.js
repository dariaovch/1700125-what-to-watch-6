import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {AuthStatus} from 'src/store/auth';

const PrivateRoute = ({children, ...props}) => {
  const {authStatus} = useSelector((state) => state.USER);

  return (
    <Route
      {...props}
      render={() => {
        return (
          authStatus === AuthStatus.AUTH
            ? (children)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  authStatus: PropTypes.string,
};

export default PrivateRoute;
