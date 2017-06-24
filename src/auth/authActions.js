export function login(email, password){
	return {
		type: 'Login',
		payload: {email: email, password: password}
	}
}

export function signup(name, email, password){
	return {
		type: 'Signup',
		payload: {name: name, email: email, password: password}
	}
}

export function logout(){
	return {
		type: 'Logout'
	}
}

export function changeValue(user){
	return {
		type: 'CHANGE_VALUE',
		payload: user
	}
}

export function changeName(text){
	return {
		type: 'CHANGE_NAME',
		payload: text
	}
}

export function changeEmail(text){
	return {
		type: 'CHANGE_EMAIL',
		payload: text
	}
}

export function changePassword(text){
	return {
		type: 'CHANGE_PASSWORD',
		payload: text
	}
}