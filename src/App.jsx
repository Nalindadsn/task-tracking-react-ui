import React from 'react';

import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';



const App = () => {

  return (
    <>
      <ToastContainer />
      <Container className=' m-0 p-0' fluid>
      
        <Outlet />
      </Container>
    </>
  );
};

export default App;
