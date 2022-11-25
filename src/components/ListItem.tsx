
import React from 'react'
import {List  } from '../redux/reducers/ListDanhmucReducer'
import { NavLink,useNavigate } from 'react-router-dom'

type Props = {
    prod: List
}

export default function ListItem({prod}: Props) {
  const navigate = useNavigate();

  return (
    
      
        <li><button className="dropdown-item Menu_danhmuc_2" 
      onClick={() => {
        navigate(`/DanhSachKhoaHoc/${prod.maDanhMuc}`);
        document.documentElement.scrollTop = 0; }}
       >{prod.tenDanhMuc}</button></li>
      
  
    
  )
}