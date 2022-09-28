import React, { Children } from 'react';

import Header from '../src/components/Header'
import  '../src/components/Header.css';
import './App.css';
import AsideMenu from './AsideMenu/AsideMenu';
import Content from './components/Content';


import {HashRouter as Router } from 'react-router-dom'

import StoreProvider from './store/StoreProvider';
import Course from './components/Course';
import Courses from './components/Courses';

const App = () => (

  <StoreProvider>
   
    <Header/>
    <Router>
    <div className='content-wrapper'>
      
      <AsideMenu />
      <Content/>
     
    </div>
    </Router>
    
  </StoreProvider>
)
  

export default App;

