import React from 'react'
import AdminBlog from './AdminBlog'
import { connect } from 'react-redux'


class AdminBlogList extends React.Component {

  render () {

    const listOfBlogs = this.props.blogs.map(blog => <AdminBlog key={blog.id} blog={blog} />)
    return (
      <div className='blog-list'>
        {listOfBlogs}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {blogs: state.blogReducer}
}

export default connect(mapStateToProps)(AdminBlogList)
