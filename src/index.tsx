import React from 'react';
import ReactDOM from 'react-dom/client';
//setup redux
import {Provider} from 'react-redux'
import {store} from './redux/configStore';
import  './assets/scss/styles.scss'
//setup router dom
import {createBrowserHistory} from 'history'; 
import {unstable_HistoryRouter as HistoryRouter, Routes,Route,Navigate} from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';
import Search from "./pages/Search/Search";
import Profile from './pages/Profile/Profile';
import Detail from './pages/Detail/Detail';
import Mentors from './pages/Mentors/Mentors';
import Advise from './pages/Advise/Advise';
// import Support from './pages/Contact/Contact';
// import TuvanKhoahoc from './pages/TuvanKhoahoc/TuvanKhoahoc';
import About from './pages/About/About';
import Introduce from './components/Introduce';
import AllProductCard from './components/AllProductCard';
import DanhSachKhoaHoc from './pages/DanhSachKhoaHoc/DanhSachKhoaHoc';
import Contact from './pages/Contact/Contact';
import AdminTemplate from './AdminTemPlate/AdminTemplate';
import App from './App';
import AddNewCourses from './AdminTemPlate/addNewCourses';
import Admin from './templates/Admin';
// import { store } from "./redux/configStore";
// import AdminTemplate from './templates/AdminTemplate';

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
        <Routes>
          <Route path='' element={<HomeTemplate />}>
            <Route index element={<Home />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='cart' element={<Cart />}></Route>
            <Route path='search' element={<Search />}></Route>
            <Route path='profile' element={<Profile />}></Route>
            {/* <Route path='tuvankhoahoc' element={<TuvanKhoahoc />}></Route> */}
            <Route path='AllProductCard' element={<AllProductCard />}></Route>
            <Route path='DanhSachKhoaHoc' element={<DanhSachKhoaHoc />}>
            <Route path=':maDanhMuc' element={<DanhSachKhoaHoc/>}>
            </Route> 
            </Route>
            <Route path='detail' element= {<Detail />}>
              <Route path=':maKhoaHoc' element={<Detail/>}>
            </Route> 
            </Route>
            <Route path='about' element={<About/>}></Route>
              <Route path='mentor' element={<Mentors />} ></Route>
              <Route path='advise' element={<Advise />}></Route>
              <Route path='contact' element={<Contact />}></Route>
            <Route path='*' element={<Navigate to='' />} /> </Route>
            <Route path='admin' element={<Admin />}>

            </Route>
        </Routes>
    </HistoryRouter>
  </Provider>
);

