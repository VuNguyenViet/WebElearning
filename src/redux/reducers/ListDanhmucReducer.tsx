import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../util/setting';
import { AppDispatch } from '../configStore';


export interface List {
  maDanhMuc: string ;
  tenDanhMuc : string
}
export interface ListState {
  arrList:List[]
}

const initialState:ListState = {
  arrList: []
}


const ListDanhmucReducer = createSlice({
  name: 'ListDanhmucReducer',
  initialState,
  reducers: {
    getListAction: (state:ListState,action:PayloadAction<List[]>) =>{
      state.arrList = action.payload;  
  },
  laydanhsachAction: (state:ListState,action:PayloadAction<List[]>) =>{
    state.arrList = action.payload;  
},
}
});

export const {getListAction,laydanhsachAction} = ListDanhmucReducer.actions

export default ListDanhmucReducer.reducer
// api 
export const getApiList = () => {
  return async (dispatch:AppDispatch) => {
    try{
        const result = await http.get('QuanLyKhoaHoc/LayDanhMucKhoaHoc');
        //Sau khi lấy dữ liệu từ api về => đưa lên redux
        const action = getListAction(result.data);
        dispatch(action);
    }   
    catch(err) {
        console.log({err})
    }
}
};


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