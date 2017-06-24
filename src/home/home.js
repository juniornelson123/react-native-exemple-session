import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux'

class Home extends React.Component {
 
  render() {
    console.log(this.props.user)
    return (
    	<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Main Page</Text>
            <Text>{this.props.user.user.name}</Text>
            <Text>{this.props.user.user.email}</Text>
    		<Text>{this.props.user.password}</Text>
    		<Button 
    			title="Logout"
    			onPress = {() => this.props.navigation.dispatch({ type: 'Logout' })}/>
    	</View>
    )
  }
}

Home.navigationOptions = {
	title: 'Principal'
}

const mapStateToProps = state => ({user: state.auth})

export default connect(mapStateToProps)(Home);
