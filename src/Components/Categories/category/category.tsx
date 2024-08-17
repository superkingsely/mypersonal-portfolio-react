import imgo from '../../../assets/portfolio2.jpg'
import './category.css'
const Category = ({img,title}:any) => {
  return (
    <div className="cat-card">
                <img src={img} alt="" />
                <div className="cat-content flex flex-col justify-center items-center">
                  <span className="text-white font-bold">{title}</span>
                  <button className='border bg-white'>SHOW NOW</button>
                </div>
    </div>
  )
}

export default Category