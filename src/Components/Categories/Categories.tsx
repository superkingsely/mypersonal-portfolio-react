import './categories.css'
import Category from './category/category'
import Cells from '../Cells/Cells'
const Categories = () => {
  return (
    <section className='min-h-[0vh] '>
        <div className="section-content min-h-[0vh]">
            <div className="cat-array">
              <Cells
              width={300}
              height={400}
              arrayLength={3}
              >
                <Category/>
              </Cells>
            </div>
        </div>
    </section>
  )
}

export default Categories