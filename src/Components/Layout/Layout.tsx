import Home from '../../Pages/Home'
import ProductListPage from '../../Pages/ProductListPage'
import ProductPage from '../../Pages/ProductPage'
import CartPage from '../../Pages/CartPage'
import {Link, Route,  Routes,redirect } from 'react-router-dom'
import PageNotFound from '../../Pages/PageNotFound'
import Login from '../../Pages/LoginPage'
import Register from '../../Pages/Register'
import Header from '../../components/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
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
              <>
              {
                user?(   <Route  path='/login' element={<Login/>}/>):(<Route  path='*'  element={<PageNotFound/>}/>)
              }
              </>
           
              {/* <Route  path='/register'>{user&&<Register/>}</Route>
               */}
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