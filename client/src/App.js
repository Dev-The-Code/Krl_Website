import React from 'react';
import './App.css';
import Contact from './Components/ContactPage/contact';
import Blog from './Components/Blog/blogMain';
import About from './Components/About/about';
import ServicesPage from './Components/ServicesPage/servicesPage';
import Projects from './Components/Projects/projects';
import Home from './Components/Home/home';
import Route from './Route';
import Banners from './Components/ServicesPage/banners'
import Header2 from './Components/Header/header2';
import Header from './Components/Header/header';
import ProjectDetailsPage from './Components/ProjectDetails/projectDetailsMain';
import MainPageServices from './Comman/ServicesMainContainer/mainPageServices';
import InterShipProgramer from './Comman/InterShipProgramers/interShipPogramer';



function App() {

 
  return (
    <div>
      {/* <ProjectDetailsPage /> */}
      <Route />
      {/* <Header /> */}
      {/* <InterShipProgramer /> */}
     
    </div>
  );
}

export default App;
