import React from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { changeValue } from '../auth/authActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const isLoggedIn = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Main'})
  ]
})

const notLoggedIn = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Login'})
  ]
})


class Splash extends React.Component {
 	
 	constructor(props) {
 		super(props);
 		
 		this.state = {};

 		AsyncStorage.getItem('user').then(resp => {
 			console.log(resp)
 			if (resp) {
 				this.props.changeValue(resp)
 				this.props.navigation.dispatch(isLoggedIn)
 			}else{
 				this.props.navigation.dispatch(notLoggedIn)
 				
 			}
 		})
 	}

  render() {
    return (
    	<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    		<Text>Carregando...</Text>    		
    	</View>
    )
  }
}

Splash.navigationOptions = {
 	header: false
}

const mapStateToProps = state => ({user: state.auth})
const mapDispatchToProps = dispatch => bindActionCreators({changeValue}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
