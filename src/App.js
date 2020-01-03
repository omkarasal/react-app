import React from 'react';
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

function App() {
  return (
    // <Login />
    <React.Fragment>
      <Header />

      <Switch>
        {/* <Route path="/login" render={props => <Login {...props} />} /> */}
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/post/:id" component={FullPost} />
        {/* <Guard><Redirect from="/" to="/login" /></Guard> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;