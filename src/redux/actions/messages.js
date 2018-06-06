import axios from 'axios'

export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS'
export const FETCH_MESSAGES_FAILED = 'FETCH_MESSAGES_FAILED'
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS'
export const ADD_MESSAGE_FAILED = 'ADD_MESSAGE_FAILED'
export const DELETE_MESSAGE_SUCCESS = 'DELETE_MESSAGE_SUCCESS'
export const DELETE_MESSAGE_FAILED = 'DELETE_MESSAGE_FAILED'

export const fetchMessages = () => {
  return async dispatch => {
    try{
    let messages = await axios.get('http://localhost:8000/api/messages')
    console.log('messages in action', messages)
    dispatch({
      type: FETCH_MESSAGES_SUCCESS,
      payload: messages

    })
  } catch(err) {
    dispatch({
      type: FETCH_MESSAGES_FAILED,
      payload: err
    })
    }
  }
}
export const addMessage = (message) => {
  return async dispatch => {
    try{
      let newMessage = await axios.post(`http://localhost:8000/api/messages`, message)
      dispatch({
        type: ADD_MESSAGE_SUCCESS,
        payload: newMessage
      })

}catch(err) {
  dispatch({
    type: ADD_MESSAGE_FAILED,
    payload: err
  })
}

}
}
export const deleteMessage = (id) => {
  console.log('id in messages actions', id)
  return async dispatch => {
    try{
      let newMessage = await axios.delete(`http://localhost:8000/api/messages/${id}`)
      dispatch({
        type: DELETE_MESSAGE_SUCCESS,
        payload: newMessage.data[0]
      })

}catch(err) {
  dispatch({
    type: DELETE_MESSAGE_FAILED,
    payload: err
  })
}

}
}
