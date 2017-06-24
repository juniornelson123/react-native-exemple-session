import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Login from '../auth/login';
import Signup from '../auth/signup';
import Main from '../home/home';
import Splash from '../splash/splash';

export const RoutesApp = StackNavigator({
  Login: { screen: Login },
  Main: { screen: Main },
  Splash: { screen: Splash },
  Signup: { screen: Signup }
});

const Routes = ({ dispatch, nav }) => (
  <RoutesApp navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(Routes);
