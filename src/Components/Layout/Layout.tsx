import Home from '../../Pages/Home'
import ProductListPage from '../../Pages/ProductListPage'
import ProductPage from '../../Pages/ProductPage'
import Newsletter from '../Newsletter/Newsletter'
import CartPage from '../../Pages/CartPage'
import {Link, Route,  Routes,redirect } from 'react-router-dom'
import PageNotFound from '../../Pages/PageNotFound'
import Login from '../../Pages/LoginPage'
import Register from '../../Pages/Register'
import Header from '../Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
const Layout = () => {
  const user=false

  return (
    <>
        <Header/>
        <Main>
          
            <Routes>
              <Route  path='/'  element={<Home/>}/>
              <Route  path='/home'  element={<Home/>}/>
              <Route  path='/cart'  element={<CartPage/>}/>
              <Route  path='/products'  element={<ProductListPage/>}/>
              
              <Route  path='/login'>{user?(<div></div>):<Login/>}</Route>
              <Route  path='/register'>{user?<redirect to='/'/>:<Register/>}</Route>
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