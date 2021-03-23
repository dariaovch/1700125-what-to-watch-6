import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthStatus} from 'src/utils/auth';

const PrivateRoute = ({component: Component, ...props}) => {
  const {authStatus} = props;

  return (
    <Route>
      {
        () => authStatus === AuthStatus.AUTH ? <Component {...props} /> : <Redirect to="/login" />
      }
    </Route>
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  authStatus: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authStatus: state.authStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
