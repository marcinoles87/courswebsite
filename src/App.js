import React from 'react';

import Header from '../src/components/Header'
import  '../src/components/Header.css';
import './App.css';
import { ReactDOM } from "react-dom";

import StoreProvider from './store/StoreProvider';

const App = () => (

  <StoreProvider>
    <Header/>
  </StoreProvider>
)
  

export default App;
