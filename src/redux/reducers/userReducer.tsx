import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../configStore';
import  {history} from '../../index'
import { ACCESS_TOKEN, getStore, getStoreJSON, http, setCookie, setStore, setStoreJSON, USER_LOGIN } from '../../util/setting';

export interface User {
  taiKhoan:        string;
  matKhau:         string
};
export interface Register {
  taiKhoan:        string;
  matKhau:           string;
  hoTen:            string;
  soDT:          string;
  maNhom:           string;
  email:           string

}

const initialState = {
  userLogin: getStoreJSON(USER_LOGIN), //null
  newUser:{},
}


const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserLoginAction : (state,action) => {
      let userLogin = action.payload;
      state.userLogin =  userLogin;
      // state.userLogin.email = email;
  },
  setNewUser: (state, action) => {
    state.newUser = action.payload;
}
  }
});

export const {setUserLoginAction,setNewUser} = userReducer.actions

export default userReducer.reducer

 
//----------api-------------

export const signinApi = (userLogin:any) => { //userLogin = {email:'',password}


  return async (dispatch:AppDispatch) => {
      try {
          let result = await http.post('/QuanLyNguoiDung/DangNhap',userLogin);

          //thành công
          //Lưu lại token
          setStore(ACCESS_TOKEN,result.data);
          setCookie(result.data,30,ACCESS_TOKEN);
          //Lưu email 
          setStoreJSON(USER_LOGIN,result.data)
      
          // console.log(result);
          const action = setUserLoginAction(result.data);
          dispatch(action);
          history.push('/profile');
         alert('Đăng nhập thành công')


      } catch (err) {
          console.log({err});
          alert('Tài khoản hoăc  mật khẩu không đúng !')
          history.push('/Register')
         

      }
  }
}



// Đăng ký 

export const signupApi = (userSignin:any) => {  // { "email": "", "password": "",  "name": "",  "gender": true, "phone": "" }
  return async (dispatch:AppDispatch) => {
      try {
          let result = await http.post('/QuanLyNguoiDung/DangKy', userSignin);
          console.log('result', result.data);

          const action = setNewUser(result.data);
          dispatch(action);

          history.push('/Home');
          alert('Đăng ký tài khoản thành công')
      } catch (err) {
          console.log(err);
          alert('Vui lòng thử lại')
      }
  }
}
 

// Lay thong tin nguoi dung 
export const getProfileApi = ()=>{

  return async (dispatch:AppDispatch) => {
      try {
          let result = await http.post('/QuanLyNguoiDung/ThongTinTaiKhoan');


          console.log('Kết quả',result.data)
          //Tạo ra actioncreator => dispatch lên redux
          const action = setUserLoginAction(result.data);
          dispatch(action);
      }catch(err){
          alert('Đăng nhập để vào trang này !');
          history.push('/login');
          console.log({err})
      }
  } 
}