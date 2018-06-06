import { FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAILED, ADD_MESSAGE_SUCCESS, ADD_MESSAGE_FAILED, DELETE_MESSAGE_SUCCESS, DELETE_MESSAGE_FAILED } from '../actions/messages'

let initialState = []

export default(state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_SUCCESS:
      return [...action.payload.data]
      console.log('action.payload in reducer', action.payload)
    case FETCH_MESSAGES_FAILED:
      return action.payload
    case ADD_MESSAGE_SUCCESS:
      return [...state, action.payload.data]
    case ADD_MESSAGE_FAILED:
      return action.payload
    case DELETE_MESSAGE_SUCCESS:
    console.log('action payload in messages reducer', action.payload)
      const messageId = action.payload.id
      return state.filter(message => message.id !== messageId)

    case DELETE_MESSAGE_FAILED:
      return action.payload
    default:
      return state
  }
}
