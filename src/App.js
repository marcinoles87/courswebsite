import React from 'react';

import Header from '../src/components/Header'
import  '../src/components/Header.css';
import './App.css';

import {HashRouter as Router } from 'react-router-dom'

import StoreProvider from './store/StoreProvider';

const App = () => (

  <StoreProvider>
    <Header/>
    <Router>
    <div className='content-wrapper'>
      <AsideMenu />
    </div>
    </Router>
    
  </StoreProvider>
)
  

export default App;

