import React from 'react'
import '../../assets/scss/components/_carousel.scss'
import {NavLink} from 'react-router-dom'



type Props = {
  title?: string
}


export default function Carousel({ }: Props) {
  const logo = require("../../assets/img/Logo.png");
  const html = require("../../assets/img/html2.png");
  const css = require ("../../assets/img/css.png")
  const js = require ("../../assets/img/js.webp")
  const frontend = require ("../../assets/img/webdesign2.jpg");
  const frontend2 = require ("../../assets/img/webdesign5.jpg")
  return (
    <div className='carousel_main'>
    
    <div className="carousel-inner carousel_1">
      
      <div className="carousel-item active carousel_2">
        <img src= {frontend}  className="d-block w-100 img-fluid" alt="..."/>
        <div className='carousel_content'>
          
          <h2 className='display-5'>Đào tạo chuyên môn về tư duy lập trình, Frontend, Backend</h2>
              <div className="carousel_button">
                <NavLink to= "/about"><button className='btn btn-primary mx-2 button_1'>Tìm hiểu thêm</button></NavLink>
                <NavLink to = "/login">
                <button className='btn btn-success button_2'>Tham gia ngay</button>
                </NavLink>
                

              </div>
        </div>
      </div>        
    </div>
  </div>
  


  )
}