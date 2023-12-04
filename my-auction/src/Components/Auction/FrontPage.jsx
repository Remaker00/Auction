import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Form from './Form';
import Products from './Products';

const FrontPage = () => {
  return (
    <div>
      <div className='nav-component'>
        <Navbar />
      </div>
      <div className='head-component'>
        <Header />
      </div>
      <div className='form-component'>
        <Form />
      </div>
      <div className='current'>
        <Products />
      </div>
    </div>
  );
}

export default FrontPage;
