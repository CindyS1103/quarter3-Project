import React from 'react'
import Blog from './Blog'
import { connect } from 'react-redux'


class BlogList extends React.Component {

  render () {
    console.log('props in blogList', this.props)
    const listOfBlogs = this.props.blogs.map(blog => <Blog key={blog.id} blog={blog} />)
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

export default connect(mapStateToProps)(BlogList)
