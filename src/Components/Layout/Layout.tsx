import Header from '../Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Home from '../../Pages/Home'

const Layout = () => {
  return (
    <>
        <Header/>
        <Main>
            <Home/>
        </Main>
        <Footer/>
    </>
  )
}

export default Layout