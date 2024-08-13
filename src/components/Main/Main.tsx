import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Payment from '../../Pages/Payment'
import Success from '../../Pages/Success'
import PageNotFound from '../../Pages/PageNotFound'

const Main = () => {
  return (
    <main>
        <Routes>
          <Route path='/' element={<Payment/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/success' element={<Success/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
    </main>
  )
}

export default Main