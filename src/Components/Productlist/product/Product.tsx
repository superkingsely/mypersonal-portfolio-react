import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import './product.css'
// import imgo from '../../../assets/portfolio1.jpg'

const Product = ({img}:any) => {
  return (
    <div className="product w-[250px] grow relative z-[1]">
        <img className='w-[100%]' src={img} alt="" />
        {/* hover content */}
        <div className="absolute  w-[100%] h-[100%] top-0 left-0 border opacity-[0] flex justify-center items-center  cursor-pointer hover:opacity-[1]">
            <div className="icons flex">
                <div>

                <ShoppingCartOutlined/>
                </div>
                <div>

                <SearchOutlined/>
                </div>
                <div>

                <FavoriteBorderOutlined/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product