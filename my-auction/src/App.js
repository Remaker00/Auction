import React from 'react'
import SignupForm from './Components/Pages/SignupForm'
import LoginForm from './Components/Pages/LoginForm'
import FrontmainPage from './Components/MainPage/FrontmainPage'
import FrontPage from './Components/Auction/FrontPage'
import AuctionItem from './Components/Auction/AuctionItem'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup-form" element={<SignupForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path='/zygler-arospace' element={<FrontmainPage />} />
          <Route path='/zygler-arospace/auction' element={<FrontPage />} />
          <Route path='/zygler-arospace/auction/product/:productId' element={<AuctionItem />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
