import React, { useState } from 'react';
import SellerForm from './SellerForm';

const Form = () => {
  const [userType, setUserType] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);

  const handleBidderClick = () => {
    setUserType('bidder');
  };

  const handleSellerClick = () => {
    setUserType('seller');
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };


  return (
    <div className='form'>
      <h2>Are you a Bidder or a Seller?</h2>
      <button onClick={handleBidderClick}>Bidder</button>
      <button onClick={handleSellerClick}>Seller</button>

      {userType === 'bidder' && (
        <div className='text'>
          <p>All the best for bidding!</p>
        </div>
      )}

      {userType === 'seller' && isFormVisible && (
        <div className="overlay">
          <SellerForm onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default Form;
