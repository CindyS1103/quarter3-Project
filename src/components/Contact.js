import React, { Component } from 'react'
import { Media } from 'reactstrap';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { addMessage } from '../redux/actions/messages'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import theImage from '../images/sos-communications.png'




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
toggle() {
  console.log(this.state)
  this.setState({
    formSubmitted: !this.state.formSubmitted
  });
}

  render() {
    console.log('state in contact', this.state)
    console.log('props in contact', this.props)


  return (
    <div>
      {this.state.formSubmitted ?
        <div>

        <Modal style={{marginTop:'200px', height:'600px', width:'50%'}} isOpen={this.state.formSubmitted} toggle={this.toggle} className={this.props.className}>

          <ModalBody style={{fontSize:'15px',backgroundColor:'#E0E0E0'}} toggle={this.formSubmitted}>
            <strong>Thank you for contacting us, we will be in touch soon!</strong>
              <Button style={{marginTop:'7em', margingRight:'7em', marginLeft:'3em'}} color="primary" onClick={()=> {this.toggle()}}>Close</Button>{' '}
          </ModalBody>

        </Modal>
        </div> : null}
      <Media>
      <Media style={{marginTop:'5em', marginLeft:'5em',fontSize:'16px', marginRight:'5em'}}>

        <Row >
          <Col xs="6" >
          <div>
      <h3 style={{color:'#1476AC'}}><span class="company">Contact Us</span></h3>
      <h4>Do you have questions regarding our fiber optic cabling, fiber fusion, or networking cabling solutions?</h4>
      <p></p>
      <h5 style={{color:'#1476AC'}}>Please contact <span class="company">SOS Communications</span> by filling in the form below.</h5>
      </div>
      <Form style={{textAlign:'center', marginTop: '50px', marginRight:'30%', marginLeft:'10px', marginBottom:'70px', fontSize:'20px', color:'#1476A8'}}onSubmit={this.handleSubmit}><strong></strong>

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
          <Input style={{height:'150px'}} type="textarea" name="text" value={this.state.message}onChange={(e)=> this.setState({message: e.target.value})} id="exampleText" placeholder="Message" />
        </Col>
      </FormGroup>
      <Button style={{marginTop: '20px', backgroundColor:'#1476AC', color:'white', fontSize:'12px', width:'70px', height:'40px',padding:'.5em',marginRight:'250px'}}>Submit</Button>
      </Form>


      </Col>

      <Col xs="6">
      <h4><strong>Dedicated to providing high-quality, affordable, customized network cabling solutions for your business!</strong></h4>

      <Media>
      <Media className="hover-contact" img src={theImage} style={{maxHeight:'50vh',objectFit:'cover', padding:'1em', marginLeft: '30px',marginRight:'30px', marginTop: '30px', width:'70%', marginBottom:'5em'}}/>
      </Media>
      <h4 style={{color:'#1476AC'}}><span class="company">Contact us today!</span> </h4>
      <h5><strong>SOS Communications</strong> is committed to establishing solid customer relationships through our dedication to exceeding expectations and providing outstanding service.</h5>

      <img className="hover-contact" style={{verticalAlign:'middle',height:'5em',marginBottom:'2.5em',marginTop:'1em'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDVP_t2jjdEEYYtHXKsPr6ScMXuae5D5rx-d8K3b7uacUDROh'/>
      <div style={{verticalAlign:'middle', display:'inline', ontSize:'20px', color:'#1476AC',marginBottom:'5em',fontSize:'20px'}}>
    <span  class="company"> 480.968.4225 </span>


      </div>




      </Col>
      </Row>
      </Media>
      </Media>



    </div>
  )
}
}
const mapDispatchToProps = dispatch => bindActionCreators({
  addMessage
}, dispatch)

export default connect(null, mapDispatchToProps)(Contact)
