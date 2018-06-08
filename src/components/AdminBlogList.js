import React from 'react'
import AdminBlog from './AdminBlog'
import { connect } from 'react-redux'


class AdminBlogList extends React.Component {

  render () {

    const listOfBlogs = this.props.blogs.map(blog => <AdminBlog key={blog.id} blog={blog} />)
    return (
      <div className='blog-list'>
          <div style={{marginTop: '20px', marginRight:'50%', marginLeft:'8em', marginBottom:'10px', fontSize:'20px', color:'#1476A8'}}><strong>View Blog Posts</strong></div>
            <hr className="my-4" />
        {listOfBlogs}



      </div>
    )
  }
}

function mapStateToProps(state){
  return {blogs: state.blogReducer}
}

export default connect(mapStateToProps)(AdminBlogList)
