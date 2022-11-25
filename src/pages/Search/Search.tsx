import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProductByKwdApiAction,Product } from "../../redux/reducers/productReducer";
import ProductCard from "../../components/ProductCard";
import { AppDispatch,RootState} from '../../redux/configStore'
import React from 'react'

type Props = {}
let timeout:any = null;
export default function Search({}: Props) {
  const { arrProduct } = useSelector((state: RootState) => state.productReducer);

  let [searchResultSorted] = useState(null);

  let [searchParams, setSearchParams] = useSearchParams();

  const dispatch:AppDispatch = useDispatch();

  const handleChange = (e:any) => {
    setSearchParams({
      tenKhoaHoc: e.target.value,
    });
  };


  const renderSearchResult = (productArray:any) => {
    return productArray.map((product:any) => (
      <div className="col-4 search-result__product " key={product.maKhoaHoc}>
        <ProductCard prod={product} />
      </div>
    ));
  };

  const getProductByKwdApi = (tenKhoaHoc:any) => {
    dispatch(getProductByKwdApiAction(tenKhoaHoc));
  };

  useEffect(() => {
    // gọi api 
     timeout = setTimeout(() => {
      getProductByKwdApi(searchParams.get("tenKhoaHoc"));
    },3000);
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [searchParams.get("tenKhoaHoc")]);


  

  return (
    <div className="container">
    <div className="search">
      <form
        className="search-bar"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p>Tìm kiếm</p>
        <input placeholder="Nhập từ khóa..." onChange={handleChange} />
        <button className="btnSearch" type="submit"
        
        >
          Tìm kiếm
        </button>
      </form>
      <div className="search-result">
        <p>Khóa học cần tìm</p>
        
        <div className="search-result__products row">
          {searchResultSorted === null
            ? renderSearchResult(arrProduct)
            : renderSearchResult(searchResultSorted)}
        </div>
        </div>
      </div>
    </div>
  );
}
