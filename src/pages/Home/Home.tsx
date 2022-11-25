import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import Introduce from '../../components/Introduce';
import ProductCard from '../../components/ProductCard';
import { AppDispatch, RootState } from '../../redux/configStore'
import { getAllProductApi, Product } from '../../redux/reducers/productReducer';

import Carousel from './Carousel';
import '../../assets/scss/pages/_home.scss'
import '../../assets/scss/base/_base.scss'
import Introduce from '../../components/Introduce';
type Props = {}


export default function Home({ }: Props) {


  const { arrProduct } = useSelector((state: RootState) => state.productReducer);

  const dispatch: AppDispatch = useDispatch();

  console.log({ arrProduct });
  useEffect(() => {
    //Gọi api
    const action = getAllProductApi();
    dispatch(action);
  }, []);

  const backToTop = () =>{
      window.scrollTo(0,0);
  }

  return (
    <>
       <div>
        <Carousel />
        <Introduce />
        <div className='container '>
          <div className='ProductFeature'>
            <div className='ProductText'>
              <h3 >Thông tin khóa học</h3>
            </div>
          </div>
          <div className='row'>
            {arrProduct.map((item: Product, index: number) => {
              return <div className='col-xl-4 g-lg-5 col-md-6 col-sm-12' key={index}>
                <ProductCard prod={item} />
              </div>
            })}
          </div>

        </div>
        
                  <div className='backToTop' onClick={()=>{
                        backToTop()
                  }}><i className="fas fa-arrow-up"></i></div>
      </div>
    </>
  )
}


