import img from '../../../assets/portfolio2.jpg'
import './category.css'
const Category = () => {
  return (
    <div className="cat-card">
                <img src={img} alt="" />
                <div className="cat-content flex flex-col justify-center items-center">
                  <span className="text-white font-bold">SHIRT STYLE</span>
                  <button className='border bg-white'>SHOW NOW</button>
                </div>
    </div>
  )
}

export default Category