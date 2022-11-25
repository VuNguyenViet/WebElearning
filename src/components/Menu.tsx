import React from 'react'
// import '../assets/scss/styles.css'
import './../assets/scss/components/_menu.scss'
import { NavLink } from 'react-router-dom';
import ListItem from './ListItem';
import ListKhoaHoc from './ListKhoaHoc'



type Props = {}

export default function Menu({}: Props) {
  return (
    <>
    <div className='menu_main'>
    <div className="menu_1">

    <nav className="navbar navbar-expand-lg navbar-dark menu_content">
  <div className="container-fluid">
    <NavLink className="navbar-brand active" to="./index.html">Trang chủ</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse menu_list" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/about">Giới thiệu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/mentor">Đội ngũ giảng viên</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/advise">Tư vấn</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Liên hệ</NavLink>
        </li>

       
       
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Danh mục khóa học
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <ListKhoaHoc />
          </ul>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Tìm kiếm khóa học..." aria-label="Search" />
        <NavLink to= "/search">
        <button className="btn btn-outline-success text-white" type="submit">Đến trang tìm kiếm</button>
        </NavLink>
       
      </form>
    </div>
  </div>
</nav>
        {/* <a href="./index.html" className="active">Trang chủ</a>
        <NavLink to="/about">Giới thiệu</NavLink>
        <NavLink to="/mentor">Đội ngũ giảng viên</NavLink>
        <NavLink to="/advise">Tư vấn</NavLink>
        <NavLink to="/contact">Liên hệ</NavLink>
        <ul className="nav-item dropdown Menu_danhmuc">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Danh mục khóa học
          </a>
          <li className="dropdown-menu" aria-labelledby="navbarDropdown">
            <ListKhoaHoc />
          </li>
        </ul> */}
    </div>
   
</div>
</>






  )
}
