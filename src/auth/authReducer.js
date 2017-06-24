import { AsyncStorage } from 'react-native'

const initialAuthState = { isLoggedIn: AsyncStorage.getItem('user'), user: {}, name: '', email: '', password: '' };

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case 'Login':
      AsyncStorage.setItem('user', JSON.stringify({user: action.payload}))
      return {...state, user: action.payload}
    case 'Signup':
      AsyncStorage.setItem('user', JSON.stringify({user: action.payload}))
      return {...state, user: action.payload}  
    case 'Logout':
      AsyncStorage.removeItem('user')
      return state
    case 'CHANGE_VALUE':
      return {...state, user: action.payload}
    case 'CHANGE_NAME':
      return {...state, name: action.payload}
    case 'CHANGE_EMAIL':
      return {...state, email: action.payload}
    case 'CHANGE_PASSWORD':
      return {...state, password: action.payload}  
    default:
      return state;
  }
}