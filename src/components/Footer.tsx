import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/scss/components/_footer.scss'

type Props = {
  title?: string
}

export default function Footer({ }: Props) {
  return (
    // <footer className='footer'>
    //   <div className='footer__part --part-1'>
    //     <div className='container'>
    //       <div className='row'>
    //       <div className='footer__item col-sm-12 col-md-6'>
    //         <h2>Hãy liên hệ ngay với chúng tôi</h2>
    //         <ul>
    //           <li><a href="#"> <span>Địa chỉ:</span>   336/12 Phường 12 , Quận 10,TP HCM</a></li>
    //           <li><a href="#"><span>Số điện thoại</span> :0934.923.643</a></li>
    //           <li><a href="https://www.facebook.com/vietvu.22.06"><span> Facebook:</span>https://www.facebook.com/vietvu.22.06</a></li>
    //           <li><a href="#"><span>Zalo:</span> 0934.923.643</a></li>
    //         </ul>
    //       </div>
    //       <div className='footer__item ps-3 me-3 --border col-sm-12 col-md-6'>
    //         <h2>Bạn cần hỗ trợ</h2>
    //         <ul>

    //           <li>
    //             <NavLink className="active" to="/advise" aria-current="page">
    //               Tư vấn khóa học
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink className="active" to="/advise">
    //               Lựa chọn khóa học
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink className="active" to="/advise">
    //               Bạn là dân trái ngành?
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink className="active" to="/advise">
    //               Bạn là sinh viên nghành CNTT?
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="footer__item col-sm-12 col-md-6">
    //         <h2 className="mb-3">Đăng ký tư vấn</h2>
    //         <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
    //           <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
    //           <NavLink to="/Register">
    //             <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
    //           </NavLink>
    //         </div>
    //       </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>


















   
 <div className='footer'>
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6 col-xl-4 row_1 ">
      <h2>Hãy liên hệ ngay</h2>
            <ul style={{paddingLeft: '2px'}}>
              <li><a href="#"> <span>Địa chỉ:</span>   336/12 Phường 12 , Quận 10,TP HCM</a></li>
              <li><a href="#"><span>Số điện thoại</span> :0934.923.643</a></li>
              <li><a href="https://www.facebook.com/vietvu.22.06"><span> Facebook:</span>https://www.facebook.com/vietvu.22.06</a></li>
              <li><a href="#"><span>Zalo:</span> 0934.923.643</a></li>
           </ul>

      </div>

      <div className="col-sm-12 col-md-6 col-xl-4 row_2">
      <h2>Bạn cần hỗ trợ</h2>
            <ul style={{paddingLeft: '2px'}}>

              <li>
                <NavLink className="active" to="/advise" aria-current="page">
                  Tư vấn khóa học
                </NavLink>
              </li>
              <li>
                <NavLink className="active" to="/advise">
                  Lựa chọn khóa học
                </NavLink>
              </li>
              <li>
                <NavLink className="active" to="/advise">
                  Bạn là dân trái ngành?
                </NavLink>
              </li>
              <li>
                <NavLink className="active" to="/advise">
                  Bạn là sinh viên nghành CNTT?
                </NavLink>
              </li>
            </ul>
      </div>

      <div className="col-sm-12 col-md-6 col-xl-4 row_4">
      <h2 className="mb-3">Đăng ký tư vấn</h2>
             <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
               <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
               <NavLink to="/Register">
                 <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
               </NavLink>
             </div>
      </div>
    </div>
  </div>
  </div>
  )
}