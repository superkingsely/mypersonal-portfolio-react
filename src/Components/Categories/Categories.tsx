import './categories.css'
import Category from '../../Components/Categories/category/category'
import Cells from '../../Components/Cells/Cells'
import { categories } from '../../Data'
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <section className='min-h-[0vh] '>
        <div className="section-content min-h-[0vh]">
            <div className="cat-array">
              <Cells
              width={300}
              height={400}
              arrayLength={1}
              >
                {/* <Category/> */}
                {
                  categories.map((obj:any)=>{
                    return(
                      <Link to={`/products/${obj.cat}`}>
                      <Category
                      img={obj.img}
                      title={obj.title}
                      />
                      </Link>
                    )
                  })
                }
              </Cells>
            </div>
        </div>
    </section>
  )
}

export default Categories