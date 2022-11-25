
import React from 'react'
import '../../assets/scss/pages/_carts.scss'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from '../../redux/configStore'
type Props = {}

export default function Cart({ }: Props) {


  const cart1 = require('../../assets/img/Cart/cart1.png');
  const cart2 = require('../../assets/img/Cart/cart2.png');
  const cart3 = require('../../assets/img/Cart/cart3.jpg')

  return (
    <div>
      <div className="cart_main">
        <div className="cart_title">
          <h1>Giỏ hàng của bạn</h1>
        </div>

        <div className="container">
          <div className="cart_info">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Khóa học</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Thời gian đào tạo</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className='cart_img'><img src="https://picsum.photos/100/100" alt="..." /> ReactJS</td>
                  <td>9.480.00 VNĐ</td>
                  <td>1</td>
                  <td>6 tháng</td>
                  <td><button className='btn btn-danger'>Xóa</button></td>

                </tr>

                <tr>
                  <td className='cart_img'><img src="https://picsum.photos/100/100" alt="..." /> ReactJS</td>
                  <td>9.480.00 VNĐ</td>
                  <td>1</td>
                  <td>6 tháng</td>
                  <td><button className='btn btn-danger'>Xóa</button></td>
                </tr>
                <tr>
                  <td className='cart_img'><img src="https://picsum.photos/100/100" alt="..." /> ReactJS</td>
                  <td>9.480.00 VNĐ</td>
                  <td>1</td>
                  <td>6 tháng</td>
                  <td><button className='btn btn-danger'>Xóa</button></td>
                </tr>
                <tr>
                  <td className='cart_img'><img src="https://picsum.photos/100/100" alt="..." /> ReactJS</td>
                  <td>9.480.00 VNĐ</td>
                  <td>1</td>
                  <td>6 tháng</td>
                  <td><button className='btn btn-danger'>Xóa</button></td>

                </tr>
              </tbody>
            </table>


            <div className="cart_pay">
              <h2>Tổng khóa học: 4</h2>
              <p>Tổng tiền: 37.920.000 VNĐ</p>
              <button className='btn btn-success cart_button'>Thanh toán</button>

            </div>

            <div className="pay_info">
              <h1>Thông tin chuyển khoản học phí</h1>
              <table className='table'>
                <thead>
                  <tr>
                    <th><img src={cart1} alt="..." className='vietcom_img' /></th>
                    <th><img src={cart2} alt="..." className='sacom_img' /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <p>STK: 315614654</p>
                      <p>Nguyen Viet Vu</p>
                    </th>

                    <th>
                      <p>STK: 315614654</p>
                      <p>Nguyen Viet Vu</p>
                    </th>

                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </div>


      </div>
    </div>
  )

}


  


