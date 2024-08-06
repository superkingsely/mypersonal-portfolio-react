import Header from '../Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Home from '../../Pages/Home'
import ProductListPage from '../../Pages/ProductListPage'
import ProductPage from '../../Pages/ProductPage'
import Newsletter from '../Newsletter/Newsletter'
import CartPage from '../../Pages/CartPage'
import {Route,  Routes } from 'react-router-dom'
import PageNotFound from '../../Pages/PageNotFound'
const Layout = () => {

  return (
    <>
        <Header/>
        <Main>
          
            <Routes>
              <Route  path='/'  element={<Home/>}/>
              <Route  path='/home'  element={<Home/>}/>
              <Route  path='/cart'  element={<CartPage/>}/>
              <Route  path='/products'  element={<ProductListPage/>}/>
              <Route  path='*'  element={<PageNotFound/>}/>
            {/* <ProductPage/> */}
            {/* <Newsletter/> */}
            
            
            </Routes>
          
        </Main>
        <Footer/>
    </>
  )
}

export default Layout