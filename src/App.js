import React from 'react';

import Header from '../src/components/Header'
import './App.css';

import StoreProvider from './store/StoreProvider';

const App = () => (

  <StoreProvider>
    <Header/>
  </StoreProvider>
)
  

export default App;
