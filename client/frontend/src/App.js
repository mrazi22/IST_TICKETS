import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Home from './components/Home.js'
import Checkout from './components/Checkout.js'
import Address from './components/Address.js'
import Payment from './components/Payment.js'
import Successful from './components/Succesful.js'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/checkout' element = {<Checkout />} />
        <Route path='/address' element = {<Address />} />
        <Route path='/payment' element = {<Payment />} />
        <Route path='/successful' element = {<Successful />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App