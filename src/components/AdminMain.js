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
  render() {
    return (
      <div>

      <button style={{marginTop: '20px', marginLeft:'20px', marginBottom:'20px', backgroundColor:'#1476AC', color:'white', fontSize:'15px', boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', width:'175px', height:'50px'}} onClick={() => this.setState({isToggle:!this.state.isToggle})}>New Blog Post</button>
      {this.state.isToggle ? <AdminAddBlogPost /> : null}

      <button style={{marginTop: '20px', marginLeft:'20px', marginBottom:'20px', backgroundColor:'#1476AC', color:'white', fontSize:'15px', boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', width:'175px', height:'50px'}} onClick={() => this.setState({isToggleUpdate:!this.state.isToggleUpdate})}>View Blog Posts</button>
      {this.state.isToggleUpdate ? <AdminBlogList /> : null}

      <button style={{marginTop: '20px', marginLeft:'20px', marginBottom:'20px', backgroundColor:'#1476AC', color:'white', fontSize:'15px', boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', width:'175px', height:'50px'}} onClick={() => this.setState({isToggleMessages:!this.state.isToggleMessages})}>View Messages</button>
      {this.state.isToggleMessages ? <AdminMessageList /> : null}


      <div style={{marginBottom:'30em'}}></div>


      </div>
    )
  }
}

export default AdminMain
