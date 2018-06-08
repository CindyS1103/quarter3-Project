import React, { Component } from 'react'
import { Media } from 'reactstrap';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import theImage from '../images/IMG_3668.jpg'
import { deleteBlog } from '../redux/actions/blog'
import { updateBlog } from '../redux/actions/blog'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import moment from 'moment'


class AdminBlog extends Component {
  state = {
    post_name: this.props.blog.post_name,
    date: this.props.blog.date,
    post_img: this.props.blog.post_img,
    post_body: this.props.blog.post_body,

  }



  handleSubmit = (e) => {
    const id = this.props.blog.id
    this.props.deleteBlog(id)
  }
  handleSubmitUpdate = (e) => {
    this.props.updateBlog(this.state,this.props.blog.id)
  }

  render() {

  let newDate = moment().format('YYYY-MM-DD')
console.log('state in adminBlog', this.state)
console.log('moment in adminBlog', moment)
  return (

    <div>
      <Form style={{marginTop: '50px', marginRight:'50%', marginLeft:'1em', marginBottom:'50px', fontSize:'20px', color:'#1476A8'}}
      onSubmit={this.handleSubmitUpdate}>

        <FormGroup row style={{marginTop:'20px'}}>

          <Label for="exampleTitle" sm={2}></Label>
          <Col sm={10}>
            <Input type="title" name="title" value={this.state.post_name}
            onChange={(e)=> this.setState({post_name: e.target.value})} id="exampleTitle" placeholder="Title" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleDate" sm={2}></Label>
          <Col sm={10}>
            <Input type="date" name="date"
              value={newDate}
            onChange={(e)=> this.setState({date: e.target.value})} id="exampleDate" placeholder="Date" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleImage" sm={2}></Label>
          <Col sm={10}>
            <Input type="post_img" name="post_img" value={this.state.post_img} onChange={(e)=> this.setState({post_img: e.target.value})} id="exampleImage" placeholder="Image" />
          </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="exampleText" sm={2}></Label>
            <Col sm={10}>
              <Input type="textarea" name="text" value={this.state.post_body} onChange={(e)=> this.setState({post_body: e.target.value})} id="exampleText" placeholder="Content" />

            </Col>
          </FormGroup>
          <Button style={{marginLeft:'12em', marginBottom:'10px', marginRight:'1em', color:'#1476A8'}} onClick={this.handleSubmit}>Delete</Button>
          <Button style={{marginBottom:'10px', color:'#1476A8',marginLeft:'40px'}}>Update</Button>
          <hr className="my-4" />
          </Form>


    </div>
  )
}
}



const mapDispatchToProps = dispatch => bindActionCreators({
  deleteBlog,
  updateBlog
}, dispatch)

export default connect(null, mapDispatchToProps)(AdminBlog)
