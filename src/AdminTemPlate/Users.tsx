import React, { Fragment } from "react";
// import "../AdminStyle/StyleAdmin.css";
// import {  TrashIcon } from "@heroicons/react/outline";
import { Button, Input, Table } from "antd";
import { EditOutlined, SearchOutlined, DeleteOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AddNewUsers from './addNewUser';
import { AppDispatch, RootState } from '.././redux/configStore'
import {
  deleteUserAction,
  getUserListAction,
  
} from "../AdminAction/userManagermentAction";


export default function User() {
  const { userList } = useSelector((state:any) => state.UserManagermentReducer);
  const [showForm, setShowForm] = useState(false);
  const [capNhat, setCapNhat] = useState({ capNhat: [] });
  const [typeAction, setTypeAction] = useState('update');
  const handleCloseForm = () => setShowForm(false);
  const [q, setQ] =  useState("");
  const dispatch:AppDispatch = useDispatch();

  const { Search } = Input;

  useEffect(() => {
    dispatch(getUserListAction());
  }, []);

  const columns: any = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      sorter: (a: any, b: any) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
            return 1;
        }
        return -1;
    },
    sortDirections: ['descend', 'ascend'],
    width: '15%'
  },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      sorter: (a: any, b: any) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", 'ascend'],
      width: "20%",
    },
    {
      title: 'Email',
            dataIndex: 'email',
            sorter: (a: any, b: any) => {
                let emailA = a.email.toLowerCase().trim();
                let emailB = b.email.toLowerCase().trim();
                if(emailA > emailB) {
                    return 1;
                }
                return -1;
            },
           
            sortDirections: ['descend', 'ascend'],
            width: '20%'
    },
    {
      title: "Điện thoại",
      dataIndex: "soDt",
      width: "15%",
    },
    {
      title: "Mã người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: 'maLoaiNguoiDung',
      width: "15%",
    },
    {
      title: "Lựa chọn",
      dataIndex: "taiKhoan",
      render: (text: string, user: any) => {
        return (
          <Fragment>
            <span className = "mr-2 text-base" style={{cursor:'pointer', }} onClick={()=>{
                        setTypeAction('update');
                        setCapNhat(user);
                        setShowForm(true);
                    }}><EditOutlined style={{ color: 'blue' }} /> </span>
            <span
              key={2}
              className="tooltip bg-white cursor-pointer"
              onClick={() => {
                if (
                  window.confirm("Chắc chắn xóa user " + user.taiKhoan + " ?")
                ) {
                  dispatch(deleteUserAction(user.taiKhoan));
                }
              }}
            >
              {/* <TrashIcon className=" h-7 w-7 text-red-600 hover:scale-125 transition duration-150 origin-center bg-white" /> */}
              <i className="fas fa-trash-alt"></i>
              <span className="tooltiptext">Xoá</span>
            </span>
            
          </Fragment>
        );
      },
      width: "10%",
    },
  ];

  const data = userList;

  const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (value: any) => {
    dispatch(getUserListAction(value));
  };

  return (
    <Fragment>
      <div style={{paddingLeft:'100px',paddingTop:'50px' }} className="py-12">
        <div className="max-w-7xl flex flex-row items-center justify-between mx-auto px-4 xl:px-0 sm:px-6 md:px-8">
          <div>
            <h3 style={{marginBottom:'50px'}} className="text-4xl">1.Quản lý thông tin người dùng</h3>
          </div>
          <div style={{marginBottom:'30px'}} className="inline-flex  items-center">
            <Search
              placeholder="Nhập từ khoá ..."
              onSearch={onSearch}
              enterButton="Tìm kiếm"
              size="large"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 xl:px-0 sm:px-6 md:px-8">
          <div className="py-4">
            <Table style={{display:'flex'}}
              columns={columns}
              dataSource={data}
              onChange={onChange}
              rowKey={"taiKhoan"}
            />
             <AddNewUsers show = {showForm} close ={handleCloseForm} capNhat = {capNhat} type = {typeAction}/>
          </div>
        </div>
      </div>
      <hr />
    </Fragment>
  );
}
