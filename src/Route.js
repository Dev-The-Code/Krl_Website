import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


//Components//
import About from './Components/About/about';
import Services from './Components/ServicesPage/servicesPage';
import Home from './Components/Home/home';
import Blog from './Components/Blog/blogMain';
import Project from './Components/Projects/projects';
import Contact from './Components/ContactPage/contact';
import ProjectDetails from './Components/ProjectDetails/projectDetailsMain';
import './App.css';


class Routes extends React.Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/project" component={Project} />
            <Route path="/projectDetails" component={ProjectDetails} />
            <Route path="/services" component={Services} />

            {/* </Route> */}
            {/* <Route path="/about" render={props => { return <About {...props}/>}} 
                ></Route>
                <Route path="/contact" render={props => { return <Contact {...props}/>}} 
                ></Route>
                <Route path="/services" render={props => { return <Services {...props}/>}} 
                ></Route>
                <Route path="/projects" render={props => { return <Project {...props}/>}} 
                ></Route>
                <Route path="/blogs" render={props => { return <Blog {...props}/>}} 
                ></Route> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
