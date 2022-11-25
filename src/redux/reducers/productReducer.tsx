import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../util/setting';
import { AppDispatch } from '../configStore';

export interface Product {
    maKhoaHoc:      string;
    biDanh:         string;
    tenKhoaHoc:     string;
    moTa:           string;
    luotXem:        number;
    hinhAnh:        string;
    maNhom:         string;
    ngayTao:        string;
    soLuongHocVien: number;
    nguoiTao:      string;
    danhMucKhoaHoc: string;
}
export interface productDetail {
    maKhoaHoc:      string;
    biDanh:         string;
    tenKhoaHoc:     string;
    moTa:           string;
    luotXem:        number;
    hinhAnh:        string;
    maNhom:         string;
    ngayTao:        string;
    soLuongHocVien: number;
    nguoiTao:      string;
    danhMucKhoaHoc: string;
    lstHocVien : [
      { taiKhoan: string;
        hoTen :string

      }
    ]
}

export interface ProductState {
    arrProduct:Product[],
    productDetail: {},
   
}

const initialState:ProductState = {
    arrProduct: [],
    productDetail: {},
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getProductAction: (state:ProductState,action:PayloadAction<Product[]>) =>{
        state.arrProduct = action.payload;
        
    },
    laydanhsachAction: (state:ProductState,action:PayloadAction<Product[]>) =>{
        state.arrProduct = action.payload;
        
    },
    setProductDetailAction: (state:ProductState,action:PayloadAction<Product[]>) =>{
        state.productDetail = action.payload;
        
    },
    getProductByKwdAction: (state:ProductState,action:PayloadAction<Product[]>) =>{
        state.arrProduct = action.payload;
        
    },
    thongtinaction: (state:ProductState,action:PayloadAction<productDetail[]>) =>{
      state.productDetail = action.payload;
      
  },
  dangkykhoahocAction: (state:ProductState,action:PayloadAction<Product[]>) =>{
    state.arrProduct = action.payload;
    
},

  }
});

export const {getProductAction
    ,laydanhsachAction,
    setProductDetailAction,
    getProductByKwdAction,
    thongtinaction,
    dangkykhoahocAction
} = productReducer.actions

export default productReducer.reducer


//----------api-------------

export const getAllProductApi = () => {
    return async (dispatch:AppDispatch) => {
        try{
            const result = await http.get('/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
            //Sau khi lấy dữ liệu từ api về => đưa lên redux
            const action = getProductAction(result.data);
            dispatch(action);
        }   
        catch(err) {
            console.log({err})
        }
    }
}

// api lấy danh sách theo khóa học 
export const LayDanhSachKhoaHoc = (maDanhMuc:any) => {
    return async (dispatch:AppDispatch) => {
        try{
            const result = await http.get(`/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`);
            //Sau khi lấy dữ liệu từ api về => đưa lên redux
            const action = laydanhsachAction(result.data);
            dispatch(action);
           
        }   
        catch(err) {
            console.log({err})
        }
    }
}
// api detail 
export const getProductDetailApiAction = (maKhoaHoc:any) => {
    return async (dispatch:AppDispatch) => {
      // call api
      try {
        const result = await http.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`);
        //Sau khi lấy dữ liệu từ api về => đưa lên redux
        const action = setProductDetailAction(result.data);
        dispatch(action);
      } catch (err) {
        console.log(err);
      }
    };
  };


  // dang ky khoc hoc x
  export const dangkykhoahoc = () => {
    return async (dispatch:AppDispatch) => {
      // call api
      try {
        const result = await http.get(`/QuanLyKhoaHoc/DangKyKhoaHoc`);
        //Sau khi lấy dữ liệu từ api về => đưa lên redux
        const action = dangkykhoahocAction(result.data);
        dispatch(action);
        alert('Ghi danh khóa học thành công')
      } catch (err) {
        console.log(err);
        alert('Đăng ký không thành công')
      }
    };
  };



  // Thong tin nguoi hoc khoc hoc
  // export const thongtinnguoihoc = (maKhoaHoc:any) => {
  //   return async (dispatch:AppDispatch) => {
  //     // call api
  //     try {
  //       const result = await http.get(`/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc?maKhoaHoc=${maKhoaHoc}`);
  //       //Sau khi lấy dữ liệu từ api về => đưa lên redux
  //       const action = thongtinaction(result.data);
  //       dispatch(action);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // };








  // api search  
export const getProductByKwdApiAction = (tenKhoaHoc:any) => {
    return async (dispatch:AppDispatch) => {
      // call api
      try {
        const result = await http.get(`/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}`);
        //Sau khi lấy dữ liệu từ api về => đưa lên redux
        const action = getProductByKwdAction(result.data);
        dispatch(action);
      } catch (err) {
        console.log(err);
      }
    };
  };

