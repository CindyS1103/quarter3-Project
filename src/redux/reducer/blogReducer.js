import {
	FETCH_BLOGS_SUCCESS,
	FETCH_BLOGS_FAILED,
	ADD_BLOG_SUCCESS,
	ADD_BLOG_FAILED,
	DELETE_BLOG_SUCCESS,
	DELETE_BLOG_FAILED,
	UPDATE_BLOG_SUCCESS,
	UPDATE_BLOG_FAILED
} from '../actions/blog'

let initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BLOGS_SUCCESS:
			return [...action.payload.data]
			console.log('action.payload in reducer', action.payload)
		case FETCH_BLOGS_FAILED:
			return action.payload
		case ADD_BLOG_SUCCESS:
			return [...state, action.payload.data]
		case ADD_BLOG_FAILED:
			return action.payload
		case DELETE_BLOG_SUCCESS:
			const blogId = action.payload.id
			return state.filter(blog => blog.id !== blogId)
		case DELETE_BLOG_FAILED:
			return action.payload
		case UPDATE_BLOG_SUCCESS:
			return action.payload
		case UPDATE_BLOG_FAILED:
			return action.payload
		default:
			return state
	}
}
