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

class AdminUpdateBlogPost extends Component {
	render() {
		return (
			<div>
				<Form
					style={{
						textAlign: 'center',
						marginTop: '50px',
						marginRight: '30%',
						marginLeft: '20%',
						marginBottom: '100px'
					}}
				>
					<strong>Add Blog Post</strong>

					<FormGroup row>
						<Label for="exampleTitle" sm={2} />
						<Col sm={10}>
							<Input
								type="title"
								name="title"
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
								id="exampleDate"
								placeholder="Date"
							/>
						</Col>
					</FormGroup>

					<FormGroup row>
						<Label for="exampleText" sm={2} />
						<Col sm={10}>
							<Input
								type="textarea"
								name="text"
								id="exampleText"
								placeholder="Content"
							/>
						</Col>
					</FormGroup>
					<Button>Submit</Button>
				</Form>
			</div>
		)
	}
}
export default AdminUpdateBlogPost
