import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native'
import { RoutesApp } from '../main/routes';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RoutesApp.router.getActionForPathAndParams('Main');
const tempNavState = RoutesApp.router.getStateForAction(firstAction);
const secondAction = RoutesApp.router.getActionForPathAndParams('Login');
const thirdAction = RoutesApp.router.getActionForPathAndParams('Splash');


const initialNavState = RoutesApp.router.getStateForAction(
  thirdAction
);

const login = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Main'})
  ]
})

const logout = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Login'})
  ]
})

export default(state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = RoutesApp.router.getStateForAction(
        login,
        state
      );
      break;
    case 'Signup':
      nextState = RoutesApp.router.getStateForAction(
        login,
        state
      );
      break;  
    case 'Logout':
      nextState = RoutesApp.router.getStateForAction(
        logout,
        state
      );
      break;
    default:
      nextState = RoutesApp.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
