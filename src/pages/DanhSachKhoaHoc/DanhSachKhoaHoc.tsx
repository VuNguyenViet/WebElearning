import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/configStore'
import { LayDanhSachKhoaHoc, Product } from '../../redux/reducers/productReducer';
import ProductCard from '../../components/ProductCard'
import { useParams } from "react-router-dom";
import '../../assets/scss/components/_danhsachkhoahoc.scss'
type Props = {}

export default function DanhSachKhoaHoc({ }: Props) {
  const { arrProduct } = useSelector((state: RootState) => state.productReducer);

  const dispatch: AppDispatch = useDispatch();
  const params = useParams();
  const getDanhsachApi = () => {

  }
  useEffect(() => {
    //Gọi api
    const action = LayDanhSachKhoaHoc(params.maDanhMuc);
    dispatch(action);
  }, [params.maDanhMuc]);
  return (
    <div className='container'>
      <div className="danhSach">
        <div className='row'>
          {arrProduct.map((item: Product, index: number) => {
            return <div className='col-xl-4 col-md-6 col-sm-12' key={index}>
              <ProductCard prod={item} />
            </div>
          })}
        </div>
      </div>
    </div>
  )
}