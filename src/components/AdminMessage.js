import React, { Component } from 'react'
import { Media } from 'reactstrap';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { deleteMessage } from '../redux/actions/messages'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



class AdminMessage extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const id = this.props.message.id
    this.props.deleteMessage(id)
  }

  render() {

console.log('state in AdminMessage',this.state)
console.log('props in AdminMessage', this.props)

  return (

<div>
<Form style={{marginLeft:'10px',marginRight:'300px'}} onSubmit={this.handleSubmit}>

  <FormGroup row>
    <Label for="exampleName" sm={2}></Label>
    <Col sm={10}>
      <Input type="name" name="name" value={this.props.message.name}
   id="exampleName"  />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label for="exampleDate" sm={2}></Label>
    <Col sm={10}>
      <Input type="date" name="date" value={this.props.message.email} id="exampleDate"  />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label for="exampleEmail" sm={2}></Label>
    <Col sm={10}>
      <Input type="email" name="email" value={this.props.message.email} id="exampleEmail" />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label for="examplePhone" sm={2}></Label>
    <Col sm={10}>
      <Input type="phone" name="phone" value={this.props.message.phone} id="examplePhone" />
    </Col>
  </FormGroup>

  <FormGroup row>
      <Label for="exampleText" sm={2}></Label>
      <Col sm={10}>
        <Input type="textarea" name="text" value={this.props.message.message} id="exampleText" />
      </Col>
    </FormGroup>
    <Button type="submit" style={{marginLeft:'250px', marginBottom:'10px'}}>Delete</Button>
      <hr className="my-4" />

    </Form>

</div>
)
}
}
const mapDispatchToProps = dispatch => bindActionCreators({
  deleteMessage
}, dispatch)

export default connect(null, mapDispatchToProps)(AdminMessage)
