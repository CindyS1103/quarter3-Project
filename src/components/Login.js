import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class Login extends Component {
	render() {
		return (
			<div>
				<Form
					style={{
						textAlign: 'center',
						width: '400px',
						margin: 'auto',
						marginTop: '100px',
						marginBottom: '75px',
						paddingTop: '10px',
						fontSize: '1.5em',
						color: '#1481B1'
					}}
				>
					<strong>Admin Login</strong>
					<FormGroup>
						<Label for="exampleEmail" />
						<Input
							type="email"
							name="email"
							id="exampleEmail"
							placeholder="Email"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="examplePassword" />
						<Input
							type="password"
							name="password"
							id="examplePassword"
							placeholder="Password"
						/>
					</FormGroup>
					<Button
						style={{ color: '#1481B1' }}
						onClick={() => this.props.history.push('/admin')}
					>
						Submit
					</Button>
				</Form>
				<div style={{ marginBottom: '20em' }} />
			</div>
		)
	}
}
export default Login
