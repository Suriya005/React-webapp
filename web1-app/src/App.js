import React, { Component } from 'react'
import Header from './header'
import About from './about'
import Project from './project'
import Signup from './signup'
import Contact from './contact'
import Footer from './footer'
import $ from 'jquery'

class App extends Component {

componentDidMount(){
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
};
navbarCollapse();
$(window).scroll(navbarCollapse);
}

  render(){
    return (
      <>
        <Header/>
        <About/>
        <Project/>
        <Signup/>
        <Contact/>
        <Footer/>
      </>
    );
  }
}

export default App;
