import Categories from './Components/Categories/Categories'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header'
import Newsletter from './Components/Newsletter/Newsletter'
import Productlist from './Components/Productlist/Productlist'
import Slider from './Components/Slider/Slider'


const App = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <Categories/>
    <Productlist/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App