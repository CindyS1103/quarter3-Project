import React, { Component } from 'react'
import AdminBlogList from './AdminBlogList'
import AdminMessageList from './AdminMessageList'
import AdminAddBlogPost from './AdminAddBlogPost'

class AdminMain extends Component {
	state = {
		isToggle: false,
		isToggleUpdate: false,
		isToggleMessages: false
	}
	handleSubmit = type => {
		let resultingState = {
			isToggle: false,
			isToggleUpdate: false,
			isToggleMessages: false
		}

		if (type == 'new_blog') {
			resultingState.isToggle = true
		} else if (type == 'view_blog') {
			resultingState.isToggleUpdate = true
		} else if (type == 'view_messages') {
			resultingState.isToggleMessages = true
		}

		this.setState(resultingState)
	}

	render() {
		return (
			<div>
				<div className="dashboard-text">
					<strong>ADMIN DASHBOARD</strong>
				</div>

				<div className="admin">
					<button
						className="logo-hover"
						style={{
							marginTop: '20px',
							borderRadius: '5px',
							marginLeft: '5em',
							marginBottom: '20px',
							backgroundColor: '#1476AC',
							color: 'white',
							fontSize: '15px',
							boxShadow:
								'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
							width: '175px',
							height: '50px'
						}}
						onClick={() => {
							this.handleSubmit('new_blog')
						}}
					>
						New Blog Post
					</button>

					<button
						className="logo-hover"
						style={{
							marginTop: '20px',
							borderRadius: '5px',
							marginLeft: '20px',
							marginBottom: '20px',
							backgroundColor: '#1476AC',
							color: 'white',
							fontSize: '15px',
							boxShadow:
								'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
							width: '175px',
							height: '50px'
						}}
						onClick={() => {
							this.handleSubmit('view_blog')
						}}
					>
						View Blog Posts
					</button>

					<button
						className="logo-hover"
						style={{
							marginTop: '20px',
							borderRadius: '5px',
							marginLeft: '20px',
							marginBottom: '20px',
							backgroundColor: '#1476AC',
							color: 'white',
							fontSize: '15px',
							boxShadow:
								'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
							width: '175px',
							height: '50px'
						}}
						onClick={() => {
							this.handleSubmit('view_messages')
						}}
					>
						View Messages
					</button>

					<button
						className="logo-hover"
						style={{
							marginTop: '20px',
							borderRadius: '5px',
							marginLeft: '20px',
							marginBottom: '20px',
							backgroundColor: '#1476AC',
							color: 'white',
							fontSize: '15px',
							boxShadow:
								'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
							width: '175px',
							height: '50px'
						}}
					>
						Settings
					</button>

					<button
						className="logo-hover"
						style={{
							marginTop: '20px',
							borderRadius: '5px',
							marginLeft: '20px',
							marginBottom: '20px',
							backgroundColor: '#1476AC',
							color: 'white',
							fontSize: '15px',
							boxShadow:
								'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
							width: '175px',
							height: '50px'
						}}
					>
						Account Management
					</button>
				</div>
				<div>
					{this.state.isToggle ? <AdminAddBlogPost /> : null}
					{this.state.isToggleUpdate ? <AdminBlogList /> : null}
					{this.state.isToggleMessages ? <AdminMessageList /> : null}
				</div>
				<div style={{ marginBottom: '30em' }} />
			</div>
		)
	}
}

export default AdminMain
