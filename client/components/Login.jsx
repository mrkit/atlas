import React, { Component, Fragment } from 'react'
import axios from 'axios'

const ErrorMessage = () => (<div>wrong password</div>)

class Login extends Component {
	state = {
		error: false,
		message: ''
	}

	handleSubmit = (evt) =>{
		evt.preventDefault()
		const formType = evt.target.formType.value
		const {username, password} = evt.target
		console.log(formType)
		axios.post(`/${formType}`, {username: username.value, password: password.value})
		.then(res => res.data)
		.then(res => {
			if(res === 'wrong password'){
				this.setState({message:res, error:true})
			}
			else if (res.username === username.value){
				this.props.history.push('/')
			}
		})
	}
	render(){
		return(
			<Fragment>
				{this.state.error && <ErrorMessage />} 
				<form onSubmit={this.handleSubmit}>
					<input type="radio" name="formType" value="create" defaultChecked /> create
					<input type="radio" name="formType" value="login" /> login
					<br />
					<label>Username <input type="text" name="username" id="username" autoFocus /></label> 
					<br />
					<label>Password <input type="password" name="password" id="password" /></label> 
					<br />
					<button>submit</button>
				</form>
			</Fragment>
		)
	}

}

export default Login