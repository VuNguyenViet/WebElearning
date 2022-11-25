import React from "react";
import './../../assets/scss/pages/_about.scss'
import {NavLink} from 'react-router-dom'

type Props = {};


export default function Introduction({}: Props) {
  const about1 = require('./../../assets/img/about/about1.jpg')
  const about2 = require('./../../assets/img/html.jpg')
  const about3 = require('./../../assets/img/about/about3.jpg')
  const about4 = require('./../../assets/img/about/about4.jpeg')
  const about5 = require('./../../assets/img/about/about5.jpeg')
  const backToTop = () =>{
    window.scrollTo(0,0);
}

  return (
    <div className="about_main">
      <div className="main_about_img">
        <img src={about1} alt="..." className="img-fluid" />
      </div>
        <div className="container">
      <div className="row about_card  animate__animated animate__fadeInDown animate__delay-0.5s">
        <div  className="col-xl-3 col-md-6 col-sm-12 mb-5">
          <div className="about_title card">
          <i className="fab fa-html5"></i>
            <h2>HTML</h2>
            <p>
             Được ví như bộ khung của 1 căn nhà, tạo nên các khối giao diện, cung cấp nội dung cho 1 trang web
            </p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-sm-12 mb-5 ">
          <div className="about_title">
          <i className="fab fa-css3-alt"></i>
            <h2>CSS</h2>
            <p>
              Được ví như màu sắc của 1 căn nhà, tạo nên hiệu ứng chuyển cảnh, màu sắc,... cho 1 trang Web
            </p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-sm-12 mb-5">
          <div className="about_title">
          <i className="fab fa-js"></i>
            <h2>JavaScript</h2>
            <p>
             Tạo nên 1 Web động, có thể tương tác với người dùng
            </p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-sm-12 mb-5">
          <div className="about_title">
          <i className="fab fa-react"></i>
            <h2>ReactJs</h2>
            <p>
             Là 1 thư viện JavaScript Frontend, giúp tạo 1 trang Web 1 cách dễ dàng hơn so với cách truyền thống
            </p>
          </div>
        </div>
      </div>

      <div className="welcome">
      <div className="row ">
        <div className="col-md-6 col-sm-12 pack_1  animate__animated animate__fadeInLeft animate__delay-1s">
          <div className="welcome_img">
            <img src={about3} alt="" />
          </div>
        </div>

        <div className="col-md-6 col-sm-12 pack_2">
          <div className="welcome_content">
            <h1 className=" animate__animated animate__shakeX animate__delay-1s ">Welcome to Elearning</h1>
            <p className="welcome_text1  animate__animated animate__fadeIn animate__delay-2s">
            <i className="fas fa-hand-point-right  "></i> Chào mừng các bạn đã đến với khóa học lập trình Web tại trung tâm chúng tôi
            </p>

            <p className="welcome_text2 animate__animated animate__fadeIn animate__delay-3s">
            <i className="fas fa-hand-point-right"></i>  Tại đây, chúng tôi đào tạo những kỹ năng, cung cấp những kiến thức sát với môi trường thực tế,
            phù hợp với môi trường doanh nghiệp, giúp tăng khả năng kiếm việc làm và tạo nền tảng cho các bạn tiến xa hơn trong nghành lập trình.
            </p>
            <p className="welcome_text2 animate__animated animate__fadeIn animate__delay-3s">
            <i className="fas fa-hand-point-right"></i> Chúng tôi đào tạo các kỹ năng cơ bản cho 1 lập trinh viên Front-end như sau:
            </p>

            <div className="welcome_skill_list">
              <div className="row">
                <div className="col-md-6 col-sm-12 skill_pack1 animate__animated animate__fadeInLeft animate__delay-4s">
                  <ul>
                    <li className=" ">
                      <i className="fa fa-arrow-right "></i>
                     HTML
                    </li>
                    <li >
                      <i className="fa fa-arrow-right  "></i>
                     CSS
                    </li>
                    <li >
                      <i className="fa fa-arrow-right "></i>
                     JAVASCRIPT
                    </li>
                  </ul>
                </div>
               
               

                <div className="col-md-6 col-sm-12 skill_pack2 animate__animated animate__fadeInLeft animate__delay-4s">
                        <ul>
                        <li>
                    <i className="fa fa-arrow-right"></i>
                   GIT
                  </li>
                  <li>
                    <i className="fa fa-arrow-right"></i>
                   SASS
                  </li>
                  <li>
                    <i className="fa fa-arrow-right"></i>
                   REACT
                  </li>
                        </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <button className="btn btn-success button_welcome animate__animated animate__bounceIn animate__delay-5s">Read More</button>

      </div>

      <div className="about_slogan">
        <div className="about_slogan_top animate__animated animate__bounceIn animate__delay-4s ">
        <i className="fas fa-code"></i>
            <h2>Học lập trình ngay từ bây giờ</h2>
        </div>

        <div className="about_slogan_bot">
              <h3 className=" animate__animated animate__bounceInUp animate__delay-5s  ">Hãy nỗ lực hết mình, ai cũng có thể bắt đầu lại .</h3>
              <div className="row">
                <div className="col-md-6 col-sm-12 mb-5 slogan_img_left animate__animated animate__backInLeft animate__delay-4s ">
                  <img src={about4} alt="" />
                </div>

                <div className="col-md-6 col-sm-12 mb-5 slogan_img_right animate__animated animate__backInRight animate__delay-4s">
                  <img src={about5} alt="" />
                </div>
              </div>
                 <NavLink to= "/register">
                  <button className="btn btn-success button-slogan  animate__animated animate__fadeInUpBig animate__delay-5s ">Ghi Danh</button>
                  </NavLink>
        </div>
      </div>
      </div>
      
      <div className='backToTop' onClick={()=>{
                        backToTop()
                  }}><i className="fas fa-arrow-up"></i></div>
      </div>
  );
}
