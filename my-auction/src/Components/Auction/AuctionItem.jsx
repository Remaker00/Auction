import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AuctionItem = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [showBidForm, setShowBidForm] = useState(false);
  const [bidAmount, setBidAmount] = useState('');
  const [timer, setTimer] = useState(24 * 60 * 60);
  const [highestBid, setHighestBid] = useState(0);

  const handleBidButtonClick = () => {
    setShowBidForm(true);
  };

  const handleBidSubmit = async (e) => {
    e.preventDefault();

    // Check if the bid amount is greater than or equal to the start price
    if (parseFloat(bidAmount) < parseFloat(product.startPrice)) {
      alert('Bid amount must be equal to or greater than the start price.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:4000/auction/submitbid/${productId}`, {
        bidderInfo: "lala",
        bidAmount: parseFloat(bidAmount),
      });

      console.log('Bid submitted successfully:', response.data);
      alert('Bid Placed Successfully');

      setBidAmount('');
      setShowBidForm(false);
    } catch (error) {
      console.error('Error submitting bid:', error);
    }
  };

  const handleBidFormClose = () => {
    // Reset bidAmount and hide the form
    setBidAmount('');
    setShowBidForm(false);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/auction/getitem/${productId}`);
        console.log("Response", response);
        setProduct(response.data);

        const bidResponse = await axios.get(`http://localhost:4000/auction/getbids/${productId}`);
        console.log("BID",bidResponse.data.bids.length);
        if (bidResponse.data.bids.length > 0) {
          const highestBid = Math.max(...bidResponse.data.bids.map((bid) => bid.bidAmount));
          setHighestBid(highestBid);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Start the timer countdown
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [productId]);

  return (
    <div className='auct-container'>
      {product && (
        <div className='auct-item'>
          <img
            src={product.productPictureLink}
            alt={`Product: ${product.productName}`}
            style={{ width: '50%', height: '100%' }}
          />
          <div className='items'>
            <p className='item-name'>{product.productName}</p>
            <p className='item-type'>Type: {product.productType}</p>
            <p className='item-desc'>Description: {product.productDesc}</p>
            <p className='item-type'>Starting Bid: ${product.startPrice}</p>
            <p className='item-type'>Highest Bidder: ${highestBid}</p>
            <div className='timer'>
              Time Left: {formatTime(timer)}
            </div>
            <button className='bid-button' onClick={handleBidButtonClick}>
              Place Your Bid...
            </button>
            {showBidForm && (
              <form className='bid-form' onSubmit={handleBidSubmit}>
                <label>
                  Enter your amount:
                  <input
                    type='text'
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                  />
                </label>
                <div className='bid-form-buttons'>
                  <button type='submit'>Submit Bid</button>
                  <button type='button' onClick={handleBidFormClose}>
                    Close
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuctionItem;
