import React from "react";
import { Product } from "../redux/reducers/productReducer";
// import '../assets/scss/styles.css'
// import '../assets/scss/components/_productCart.scss'
import "../assets/scss/components/_productCart.scss";
import { NavLink, useNavigate } from "react-router-dom";

type Props = {
  prod: Product;
};

export default function ProductCard({ prod }: Props) {
  const navigate = useNavigate();

  const backToTop = () =>{
    window.scrollTo(0,0);
}
  return (
    <div className="cardProduct">
      <div className="hire_space">
        <div className="col-sm-12">
          <div style={{overflow:'hidden'}} className="card card_home animate__animated animate__fadeIn animate__delay-0.5s ">
            <div className="card_img animate__animated animate__fadeInDown animate__delay-1s">
              <img
                style={{ height: "150px" }}
                src={prod.hinhAnh}
                alt={prod.tenKhoaHoc}
                
              />
            </div>
            <div
              style={{ height: 250, backgroundColor: "gray" }}
              className="card-body bg-dark text-white card_mota animate__animated animate__fadeInLeft animate__delay-1s"
            >
              <h2 onClick={() => {
                  navigate(`/detail/${prod.maKhoaHoc}`);
                  document.documentElement.scrollTop = 0;
                }} style={{cursor:"pointer"}}>
                <a >{prod.tenKhoaHoc.length > 30
                  ? prod.tenKhoaHoc.slice(0, 30) + "..."
                  : prod.tenKhoaHoc}</a>
              </h2>
              <h3>Lượt xem:{prod.luotXem}</h3>
              <p>
                {prod.moTa.length > 100
                  ? prod.moTa.slice(0, 100) + "..."
                  : prod.moTa}
              </p>
            </div>
            <div className="button_productCard">
              <button
                className="btn btn-success btn-primary animate__animated animate__fadeInRight animate__delay-1s "
                onClick={() => {
                  navigate(`/detail/${prod.maKhoaHoc}`);
                  document.documentElement.scrollTop = 0;
                }}
              >
                Chi Tiết Khóa Học
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='backToTop' onClick={()=>{
                        backToTop()
                  }}><i className="fas fa-arrow-up"></i></div>
    </div>
  );
}
