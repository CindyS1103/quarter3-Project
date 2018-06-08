import axios from 'axios'

export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS'
export const FETCH_BLOGS_FAILED = 'FETCH_BLOGS_FAILED'
export const ADD_BLOG_SUCCESS = 'ADD_BLOG_SUCCESS'
export const ADD_BLOG_FAILED = 'ADD_BLOG_FAILED'
export const DELETE_BLOG_FAILED = 'DELETE_BLOG_FAILED'
export const DELETE_BLOG_SUCCESS = 'DELETE_BLOG_SUCCESS'
export const UPDATE_BLOG_SUCCESS = 'UPDATE_BLOG_SUCCESS'
export const UPDATE_BLOG_FAILED = 'UPDATE_BLOG_FAILED'

export const fetchBlogs = () => {
  return async dispatch => {
    try{
    let blogs = await axios.get('http://localhost:8000/api/blog')
    console.log('blogs in action', blogs)
    dispatch({
      type: FETCH_BLOGS_SUCCESS,
      payload: blogs

    })
  } catch(err) {
    dispatch({
      type: FETCH_BLOGS_FAILED,
      payload: err
    })
    }
  }
}
export const addBlog = (blog) => {
  return async dispatch => {
    try{
      let newBlog = await axios.post(`http://localhost:8000/api/blog`, blog)
      dispatch({
        type: ADD_BLOG_SUCCESS,
        payload: newBlog
      })

}catch(err) {
  dispatch({
    type: ADD_BLOG_FAILED,
    payload: err
  })
}

}
}
export const deleteBlog = (id) => {

  return async dispatch => {
    try{
      let newBlog = await axios.delete(`http://localhost:8000/api/blog/${id}`)
      dispatch({
        type: DELETE_BLOG_SUCCESS,
        payload: newBlog.data[0]
      })

}catch(err) {
  dispatch({
    type: DELETE_BLOG_FAILED,
    payload: err
  })
}

}
}
export const updateBlog = (blog,id) => {

  return async dispatch => {
    try{
      let blogUpdate = await axios.patch(`http://localhost:8000/api/blog/${id}`, blog)
      console.log(blog)
      dispatch({
        type: UPDATE_BLOG_SUCCESS,
        payload: blogUpdate.data

      })

}catch(err) {
  dispatch({
    type: UPDATE_BLOG_FAILED,
    payload: err
  })
}

}
}
