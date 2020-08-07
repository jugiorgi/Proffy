import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import './assets/styles/global.css';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={3000} />
     </>
  );
}

export default App;
