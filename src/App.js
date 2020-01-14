import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Login from './Login/Login';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Blog from './Blog/Blog';
import FullPost from './Blog/FullPost';
import Contact from './Contact/Contact';
import Guard from './Login/Guard';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isAuthenticated: false
    }
  }
  
  componentDidMount(){
    let checkAuthentication = false;
    
    if(localStorage.getItem('isLoggedIn') === 'true'){
      checkAuthentication = true;
    }else{
      checkAuthentication = false;
    }
    
    this.setState({
      isAuthenticated: checkAuthentication
    })
  }

  render(){
    let header = null;
    if(this.state.isAuthenticated){
      header = <Header />
    }

    let routes = {};
    if(this.state.isAuthenticated){
      routes = (
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/post/:id" component={FullPost} />
          <Redirect to="/home" />
        </Switch>
      )
    }else{
      routes = (
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect to="/login" />
        </Switch>
      )
    }

    return (
      <React.Fragment>
        { header }
        { routes }
      </React.Fragment>
    );
  }
}

export default App;