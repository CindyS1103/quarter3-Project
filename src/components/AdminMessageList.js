import React from 'react'
import AdminMessage from './AdminMessage'
import { connect } from 'react-redux'


class AdminMessageList extends React.Component {

  render () {

    const listOfMessages = this.props.messages.map(message => <AdminMessage key={message.id} message={message} />)
    return (
      <div className='message-list'>
      {listOfMessages}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {messages: state.messagesReducer}
}

export default connect(mapStateToProps)(AdminMessageList)
