import React from "react";
import { useDispatch } from "react-redux";
// import '../../assets/scss/styles.scss'
import { NavLink, useNavigate } from "react-router-dom";
import { productDetail } from "../../redux/reducers/productReducer";
import "../../assets/scss/styles.css";
import '../../assets/scss/pages/_detail.scss'

type Props = {
  prod: productDetail;
};

export default function ProductDetail({ prod }: Props) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="d-flex detail_main">
        <div className="row">
          <div className="col-md-6 col-sm-12 animate__animated animate__fadeInLeft animate__delay-0.5s">
            <div className="w-50 detail_img">
              <img src={prod.hinhAnh} alt="..." />
              
            </div>
          </div>

          <div className="col-md-6 col-sm-12 animate__animated animate__fadeInRight animate__delay-0.5s">
            <div className="w-50 detail_content">
              <div className="card">
                  <h1>{prod.tenKhoaHoc}</h1>
                 <p className="moTa">Mô tả: {prod.moTa}</p>
                <p className="ngayTao">Ngày tạo:{prod.ngayTao}</p>
                <p className="maNhom">Mã nhóm:{prod.maNhom}</p>
                <p className="luotXem">Lượt xem: {prod.luotXem}</p>
                <p className="slHocVien">Số lượng học viên: {prod.soLuongHocVien}</p>
                 <NavLink to= "/cart">
                <button className="detail_button btn btn-success">Ghi danh khóa học</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
