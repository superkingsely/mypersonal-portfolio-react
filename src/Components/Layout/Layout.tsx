import Header from '../Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Home from '../../Pages/Home'
import ProductListPage from '../../Pages/ProductListPage'
import ProductPage from '../../Pages/ProductPage'
import Newsletter from '../Newsletter/Newsletter'
import CartPage from '../../Pages/CartPage'

const Layout = () => {

  return (
    <>
        <Header/>
        <Main>
            {/* <Home/> */}
            {/* <ProductListPage/> */}
            {/* <ProductPage/> */}
            {/* <Newsletter/> */}
            <CartPage/>
        </Main>
        <Footer/>
    </>
  )
}

export default Layout