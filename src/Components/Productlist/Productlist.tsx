import { useEffect, useState } from 'react'
import Cells from '../../Components/Cells/Cells'
import Product from '../../Components/Productlist/product/Product'
import { popularProducts } from '../../Data'
// import axios from 'axios'
import img from '../../assets/portfolio5.jpg'


const Productlist = ({cat,filters,sort}:any) => {
  // js
  const [products,setProducts]=useState<Array<any>>([])
  const [filteredproducts,setFilteredproducts]=useState<Array<any>>([])
  // products
  useEffect(()=>{
    const getProducts=async()=>{
      try{
        // we are to get product by query
        // const res=axios.get('')
        const res=await fetch('')

      }catch(e){

      }
    }
  },[cat])
  useEffect(()=>{
    const getProducts=async()=>{
      try{
        // we are to get product by query
        // const res=axios.get('')
        // err:url scheme "localhost"=http://
        // err:net_err= internet
        // err:net_err_200(ok)= cors
        // err:net_err_connection refuse= port
        const res=await fetch(cat?`http://localhost:5000/api/offline-products?category=${cat}`:'http://localhost:5000/api/offline-products')
        const data=await res.json()
        console.log(res,'da',data)
        setProducts(data)
      }catch(e:any){
        console.log('err',e.message)
      }
    }
    getProducts()
  },[cat])
  return (
    <section className='min-h-[0]'>
        <div className="section-content min-h-[0]">
            <div className="productlist max-w-[1200px] mx-auto">

            <Cells
            width={300}
            height={400}
            arrayLength={1}
            >
                {/* <Product/> */}
                {

                  products&&products.slice(0,4).map((obj:any)=>{
                    return(
                      <Product
                      img={img}
                      idd={obj.id}
                      obj={obj}
                      />
                    )
                  })
                }
            </Cells>
            <Cells
            width={300}
            height={400}
            arrayLength={1}
            >
                {/* <Product/> */}
                {
                  products&&products.slice(4,8).map((obj:any)=>{
                    return(
                      <Product
                      img={img}
                      idd={obj.id}
                      obj={obj}
                      />
                    )
                  })
                }
            </Cells>
            </div>
        </div>
    </section>
  )
}

export default Productlist