import React, { Component } from 'react'
import { Media } from 'reactstrap'
import {
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Row
} from 'reactstrap'
import { addBlog } from '../redux/actions/blog'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class AdminAddBlogPost extends Component {
	state = {
		post_name: '',
		date: '',
		post_img: '',
		post_body: ''
	}
	handleSubmit = e => {
		this.props.addBlog(this.state)
	}

	render() {
		console.log('state in adminBlogPost', this.state)
		return (
			<div>
				<div
					style={{
						marginTop: '20px',
						marginRight: '50%',
						marginLeft: '8em',
						marginBottom: '10px',
						fontSize: '20px',
						width: '8em',
						color: '#1476A8',
						padding: '.5em'
					}}
				>
					<strong>Add Blog Post</strong>
				</div>
				<hr className="my-4" />
				<Form
					style={{
						marginTop: '50px',
						marginRight: '50%',
						marginLeft: '1em',
						marginBottom: '50px',
						fontSize: '20px',
						color: '#1476A8'
					}}
					onSubmit={this.handleSubmit}
				>
					<FormGroup row style={{ marginTop: '20px' }}>
						<Label for="exampleTitle" sm={2} />
						<Col sm={10}>
							<Input
								type="post_name"
								name="post_name"
								value={this.state.post_name}
								onChange={e => this.setState({ post_name: e.target.value })}
								id="exampleTitle"
								placeholder="Title"
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="exampleDate" sm={2} />
						<Col sm={10}>
							<Input
								type="date"
								name="date"
								value={this.state.date}
								onChange={e => this.setState({ date: e.target.value })}
								id="exampleDate"
								placeholder="Date"
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="exampleImage" sm={2} />
						<Col sm={10}>
							<Input
								type="img"
								name="img"
								value={this.state.post_img}
								onChange={e => this.setState({ post_img: e.target.value })}
								id="exampleImage"
								placeholder="Image"
							/>
						</Col>
					</FormGroup>

					<FormGroup row>
						<Label for="exampleText" sm={2} />
						<Col sm={10}>
							<Input
								type="textarea"
								name="text"
								value={this.state.post_body}
								onChange={e => this.setState({ post_body: e.target.value })}
								id="exampleText"
								placeholder="Content"
							/>
						</Col>
					</FormGroup>
					<Button
						style={{
							marginLeft: '12em',
							marginBottom: '10px',
							marginRight: '430px',
							color: '#1476A8'
						}}
					>
						Submit
					</Button>
				</Form>
			</div>
		)
	}
}
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			addBlog
		},
		dispatch
	)

export default connect(
	null,
	mapDispatchToProps
)(AdminAddBlogPost)
