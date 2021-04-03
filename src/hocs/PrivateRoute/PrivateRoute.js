import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthStatus} from 'src/store/auth';
import {getAuthStatus} from 'src/store/selectors/user';

const PrivateRoute = ({children, authStatus, ...props}) => {
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

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
