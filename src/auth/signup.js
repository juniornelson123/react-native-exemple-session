import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { signup, changeName, changeEmail, changePassword} from './authActions'

class Signup extends React.Component {
  
  _signup(){
    const { name, email, password } = this.props.user

    this.props.signup(name, email, password)
  }

  render() {
    return (
    	<View style={{flex: 1,  margin: 16}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text>Cadastrar</Text>
        </View>
        <View style={{flex: 2}}>
          <TextInput placeholder="Insira seu nome" onChangeText={text => this.props.changeName(text)}/>
          <TextInput placeholder="Insira seu email" onChangeText={text => this.props.changeEmail(text)}/>
          <TextInput placeholder="Insira sua senha" onChangeText={text => this.props.changePassword(text)}/>
      		<Button 
      			title="Cadastrar"
      			onPress = {() => this._signup()}/>
        </View>
    	</View>
    );
  }
}

Signup.navigationOptions = {
  title: 'Signup',
};

const mapStateToProps = state => ({user: state.auth})
const mapDispatchToProps = dispatch => bindActionCreators({signup, changeName, changeEmail, changePassword}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

