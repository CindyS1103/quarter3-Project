import React, { Component } from 'react'
import { Media } from 'reactstrap';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { addMessage } from '../redux/actions/messages'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'




class Contact extends Component {
state ={
  name: '',
  email: '',
  phone: '',
  message: '',
  formSubmitted: false
}
handleSubmit = (e) => {
  e.preventDefault()
  let {name, email, message, phone} = this.state
  let newMessage = {name, email, message, phone}
  this.props.addMessage(newMessage)
  this.setState({
    name: '',
    email: '',
    phone: '',
    message: '',
    formSubmitted: true
  })
}

  render() {
    console.log('state in contact', this.state)
    console.log('props in contact', this.props)


  return (
    <div>
      {this.state.formSubmitted ? <div>Thank you for Submitting the form!</div> : null}

    <Form style={{textAlign:'center', marginTop: '100px', marginRight:'30%', marginLeft:'20%', marginBottom:'100px', fontSize:'20px', color:'#1476A8'}}onSubmit={this.handleSubmit}><strong>Contact Form</strong>

      <FormGroup style={{paddingTop:'20px'}} row>
        <Label for="exampleEmail" sm={2}></Label>
        <Col sm={10}>
          <Input type="name" name="name" id="exampleName" value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})} placeholder="Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}></Label>
        <Col sm={10}>
          <Input type="email" name="email" value={this.state.email}onChange={(e)=> this.setState({email: e.target.value})} id="exampleEmail" placeholder="Email" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePhone" sm={2}></Label>
        <Col sm={10}>
          <Input type="phone" name="phone" value={this.state.phone}onChange={(e)=> this.setState({phone: e.target.value})} id="examplePhone" placeholder="Phone" />
        </Col>
      </FormGroup>
      <FormGroup row>
          <Label for="exampleText" sm={2}></Label>
          <Col sm={10}>
            <Input type="textarea" name="text" value={this.state.message}onChange={(e)=> this.setState({message: e.target.value})} id="exampleText" placeholder="Message" />
          </Col>
        </FormGroup>
        <Button style={{marginTop: '20px', backgroundColor:'#1476AC', color:'white', fontSize:'15px', width:'150px', height:'50px'}}>Submit</Button>
        </Form>
        <div style={{marginBottom:'20em'}}></div>
    </div>
  )
}
}
const mapDispatchToProps = dispatch => bindActionCreators({
  addMessage
}, dispatch)

export default connect(null, mapDispatchToProps)(Contact)
