import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthStatus} from 'src/store/auth';

const PrivateRoute = ({children, ...props}) => {
  const {authStatus} = props;

  return (
    <Route
      {...props}
      render={() =>
        authStatus === AuthStatus.AUTH ? (
          children
        ) : (
          <Redirect to="/login" />
        )
      }
    />

  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  authStatus: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authStatus: state.authStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
