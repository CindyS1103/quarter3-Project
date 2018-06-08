import React from 'react'
import AdminMessage from './AdminMessage'
import { connect } from 'react-redux'


class AdminMessageList extends React.Component {

  render () {

    const listOfMessages = this.props.messages.map(message => <AdminMessage key={message.id} message={message} />)
    return (
      <div className='message-list'>
        <div style={{marginTop: '10px', marginRight:'50%', marginLeft:'8em', marginBottom:'10px', fontSize:'20px', color:'#1476A8'}}><strong>Messges</strong></div>
        <hr className="my-4" />
      {listOfMessages}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {messages: state.messagesReducer}
}

export default connect(mapStateToProps)(AdminMessageList)
