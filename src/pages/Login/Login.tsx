import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AppDispatch } from '../../redux/configStore'
import { useDispatch } from 'react-redux'
import { signinApi } from '../../redux/reducers/userReducer'
import { http } from '../../util/setting'
import '../../assets/scss/pages/_login.scss'

// import FacebookLogin from 'react-facebook-login'

type Props = {}

export default function Login({ }: Props) {
  // const responseFacebook = (response) => {
  //   console.log(response);
  // }
  const dispatch: AppDispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email không được bỏ trống !'),
      password: Yup.string().required('Password không được bỏ trống !').min(3, 'password từ 3 - 32 ký tự!').max(32, 'password từ 3 đến 32 ký tự!')
      // .matches(/cybersoft/,'Password phải có cybersoft')
    })
    ,
    onSubmit: (values) => {

      const payload = {
        taiKhoan: values.email,
        matKhau: values.password
      }

      // console.log(values)
      const action = signinApi(payload);
      dispatch(action);


    }
  })

  const login1 = require('../../assets/img/login/login1.jpg')

  return (
    <form className='login_main' onSubmit={formik.handleSubmit}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12 pt-5'>
            <h1>Đăng nhập</h1>
            <h3>Tài khoản</h3>
            <input type="text" id="email" name='email' placeholder='Enter Your Email' className='Login_padding' onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.email ? <p className='text text-danger'>{formik.errors.email}</p> : ''}
            <h3>Mật khẩu</h3>
            <div className='password'>
              <input type="password" placeholder=' Enter your PassWord' className='Login_padding' id="password" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.password ? <p className='text text-danger'>{formik.errors.password}</p> : ''}
              <button className='eye'>
                <i className="fas fa-eye-slash"></i>
              </button>

            </div>
            <div className='login_flex'>
              <div className='login_register my-3'>
                <NavLink to="/Register">Đăng ký ngay ?</NavLink>
              </div>
              <button type='submit' className='login_button btn btn-success'>Đăng nhập</button>
            </div>

          </div>
          <div className='col-md-6 col-sm-12 pt-5'>
            <img src={login1} alt="" />
          </div>
        </div>
      </div>
    </form>
  )
}