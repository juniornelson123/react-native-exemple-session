import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login, changeName, changeEmail, changePassword} from './authActions'

class Login extends React.Component {
  
  _login(){
    const { email, password } = this.props.user

    this.props.login(email, password)
  }

  render() {
    return (
    	<View style={{flex: 1,  margin: 16}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text>Login Page</Text>
        </View>
        <View style={{flex: 2}}>
          <TextInput placeholder="Insira seu email" onChangeText={text => this.props.changeEmail(text)}/>
          <TextInput placeholder="Insira sua senha" onChangeText={text => this.props.changePassword(text)}/>
      		<Button 
      			title="Login"
      			onPress = {() => this._login()}/>
          <View>  
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text>Cadastrar</Text>
            </TouchableHighlight>
          </View>  
        </View>
    	</View>
    );
  }
}

Login.navigationOptions = {
  title: 'Login',
};

const mapStateToProps = state => ({user: state.auth})
const mapDispatchToProps = dispatch => bindActionCreators({login, changeName, changeEmail, changePassword}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login);

