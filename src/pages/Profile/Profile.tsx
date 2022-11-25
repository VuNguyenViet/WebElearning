import React from 'react'
import '../../assets/scss/pages/_profile.scss'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getProfileApi } from "../../redux/reducers/userReducer";
import { AppDispatch, RootState } from '../../redux/configStore'
import { useParams } from "react-router-dom";
import {
  ACCESS_TOKEN,
  clearCookie,
  clearLocalStorage,
  USER_LOGIN,
} from "../../util/setting";

type Props = {
}

export default function Profile({ }: Props) {
  const profile1 = require('../../assets/img/profile/profile1.png');
  const profile2 = require('../../assets/img/profile/profile2.jpg')
  const { userLogin } = useSelector((state:RootState) => state.userReducer);
  const dispatch:AppDispatch = useDispatch();

  console.log(userLogin);

  // useEffect(() => {
  //   const action = getProfileApi();
  //   dispatch(action);
  // },[]);
  return (

    <div className='profile '>
      {/* <img src={profile2} alt="" /> */}


      <div className="container">
        <div className="profile_info">
          <div className="row">
            <div className="profile_title">
              <h1>Thông tin học viên</h1>
            </div>

           <div className="container">
           <div className="profile_info">
                     <div className="row">
                      <div className="col-6">
                      <div className="profile_img">
                            <img src={profile1} alt="..." />
                      </div>

                     <div className="profile_content">
                            <p className="tenHV">Tên học viên: {userLogin.tenHV}</p>
                            <p className="taiKhoan">Tài khoản: nguyenvietvu963</p>
                              <p className="Sdt">SĐT: 0934.923.643</p>
                              <p className="maNhom">Mã nhóm: gp01</p>
                      </div> 
                      </div>
                        <div className="col-6">
                             <div className="list_course_profile">
                             <h2>Danh sách khóa học đã đăng ký</h2>
                            <table className="table">
                                  <thead>
                                      <tr>
                                        <th>Khóa Frontend</th>
                                        <th>Khóa Backend</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>ReactJs</td>
                                      <td>Node Js</td>
                                    </tr>
                                  </tbody>
                                  {/* <img src={profile2} alt="..." /> */}
                            </table>
                             </div>
                        </div>
                     </div>
              </div>

              <div className="profile_content">
                <p className="tenHV">Tên học viên: Nguyễn Viết Vũ</p>
                <p className="taiKhoan">Tài khoản: nguyenvietvu963</p>
                <p className="Sdt">SĐT: 0934.923.643</p>
                <p className="maNhom">Mã nhóm: gp01</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 pb-5">
              <div className="list_course_profile">
                <h2>Danh sách khóa học đã đăng ký</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Khóa Frontend</th>
                      <th>Khóa Backend</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ReactJs</td>
                      <td>Node Js</td>
                    </tr>
                  </tbody>
                  {/* <img src={profile2} alt="..." /> */}
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}