import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Login from './components/Login'
import Footer from './components/Footer'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import TopNav from './components/TopNav'
import Photos from './components/Photos'
import BlogList from './components/BlogList'
import AdminMain from './components/AdminMain'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <TopNav />

      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/photos' component={Photos}/>
      <Route exact path='/blog' component={BlogList}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/admin' component={AdminMain}/>

      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
