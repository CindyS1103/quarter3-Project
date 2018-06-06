import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Login extends Component {
  render() {






    return (
      <div>
      <Form style={{textAlign: 'center', width: '400px', margin: 'auto', marginTop:'50px', marginBottom: '75px', paddingTop: '10px', fontSize: '1.5em', color: '#1481B1'}}>Admin Login
        <FormGroup>
          <Label for="exampleEmail"></Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword"></Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
         <Button style={{color:'#1481B1'}} onClick={() => this.props.history.push('/admin')}>Submit</Button>
        </Form>
    </div>
  )
}

}
export default Login
