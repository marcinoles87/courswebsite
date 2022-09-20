import React from 'react';
import './App.css';

import StoreProvider from './store/StoreProvider';

const App = () => (

  <StoreProvider>
    <header>Hello World</header>
  </StoreProvider>
)
  

export default App;
