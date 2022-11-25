import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signupApi } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from '../../redux/configStore'
import '../../assets/scss/pages/_register.scss'
type Props = {}

export default function Register({ }: Props) {
  // const [gender, setGender] = useState(true);

  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
      title: "",
      review: ""
    },
    validationSchema: Yup.object().shape({
      phone: Yup.string()
        .required("Số điện thoại không được để trống !")
        .min(10, "Số điện thoại phải đủ 10 số "),
      name: Yup.string().required("Tên không được để trống "),
      title: Yup.string().required("Tài khoản không được để trống "),
      review: Yup.string().required("Mã nhóm không được để trống "),
      email: Yup.string()
        .required("Email không được bỏ trống !")
        .email("Email không đúng định dạng!"),
      password: Yup.string()
        .required("Password không được bỏ trống !")
        .min(3, "password từ 3 - 32 ký tự!")
        .max(32, "password từ 3 đến 32 ký tự!"),
      // .matches(/cybersoft/,'Password phải có cybersoft')
    }),
    onSubmit: (values) => {
      const payload = {
        taiKhoan: values.title,
        matKhau: values.password,
        hoTen: values.name,
        soDT: values.phone,
        email: values.email,
        maNhom: values.review
      }
      const action = signupApi(payload);
      dispatch(action)
    }
  });
  const register1 = require('../../assets/img/register/register1.jpg');
  const register2 = require('../../assets/img/register/register2.jpg')
  return (


    <div className="register">

      <form className="row" onSubmit={formik.handleSubmit}>
        {/* Bên trái  */}
        <div className="col-12">
          <div className ="text_vali">
            <p>Tài Khoản</p>
          </div>
          <input
            id="title"
            className="input_validation"
            type="text"
            placeholder="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div>
            {formik.errors.title ? (
              <p className="text text-danger">{formik.errors.title}</p>
            ) : (
              ""
            )}
          </div>
          <div className ="text_vali">
            <p>Email</p>
          </div>
          <input
            name="email"
            className="input_validation"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div>
            {formik.errors.email ? (
              <p className="text text-danger">{formik.errors.email}</p>
            ) : (
              ""
            )}
          </div>

          <div className ="text_vali">
            <p>Mật khẩu</p>
          </div>
          <input
            name="password"
            className="input_validation"
            type="password"
            placeholder="PassWord"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div>
            {formik.errors.password ? (
              <p className="text text-danger">{formik.errors.password}</p>
            ) : (
              ""
            )}
          </div>

          <div className ="text_vali">
            <p>Nhập lại mật khẩu</p>
          </div>
          <input
            name="passwordConfirmed"
            className="input_validation"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div>
            {formik.errors.password ? (
              <p className="text text-danger">{formik.errors.password}</p>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* Bên phải  */}
        <div className="col-12 register_right">
          <div className ="text_vali">
            <p>Tên</p>
          </div>
          <input
            id="name"
            className="input_validation"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div>
            {formik.errors.name ? (
              <p className="text text-danger">{formik.errors.name}</p>
            ) : (
              ""
            )}
          </div>

          <div className ="text_vali">
            <p>Số điện thoại</p>
          </div>
          <input
            id="phone"
            className="input_validation"
            placeholder="Phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div>
            {formik.errors.phone ? (
              <p className="text text-danger">{formik.errors.phone}</p>
            ) : (
              ""
            )}
          </div>

          <div className ="text_vali">
            <p>Mã nhóm</p>
          </div>
          <input
            id="review"
            className="input_validation"
            type="text"
            placeholder="review"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div>
            {formik.errors.review ? (
              <p className="text text-danger">{formik.errors.review}</p>
            ) : (
              ""
            )}
          </div>

          <button type='submit' className="Submit_register">
            Đăng ký
          </button>
        </div>
      </form>
    </div>


  );
}