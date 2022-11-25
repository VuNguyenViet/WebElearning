//tsrfc
import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailApiAction, dangkykhoahoc} from "../../redux/reducers/productReducer";
import ProductDetail from './ProductDetail'
import { Product } from '../../redux/reducers/productReducer'
import { AppDispatch } from '../../redux/configStore'


type Props = {
}

export default function Detail({}: Props) {
  const { productDetail } = useSelector((state:any) => state.productReducer);

  const dispatch:AppDispatch = useDispatch();

  const params = useParams();

  const getProductDetailApi = () => {
    const action = getProductDetailApiAction(params.maKhoaHoc);
    dispatch(action);
  };

  const dangkykhoahocAction = () => {
    const action = dangkykhoahoc();
    dispatch(action);
  }


  // const laythongtinhocvien = () => {
  //   const action = thongtinnguoihoc ();
  //   dispatch (action)
  // }

  useEffect(() => {
    getProductDetailApi();
    // laythongtinhocvien ()
    // dangkykhoahocAction
  }, [params.maKhoaHoc]);

  return (
   <>
    <ProductDetail prod ={productDetail} />
   </>
  )
}