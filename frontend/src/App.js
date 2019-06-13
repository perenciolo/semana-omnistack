import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

// Custom Components
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
