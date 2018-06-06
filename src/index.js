import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchMessages } from './redux/actions/messages'
import { fetchBlogs } from './redux/actions/blog'
import 'bootswatch/dist/lumen/bootstrap.min.css'

let newStore = store()


newStore.dispatch(fetchBlogs())
newStore.dispatch(fetchMessages())


ReactDOM.render(
  <Provider store={newStore}>
  <App />
  </Provider>
  , document.getElementById('root'));
