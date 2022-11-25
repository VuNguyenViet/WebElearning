import React from 'react'
import { Outlet } from 'react-router-dom'
import AddNewCourses from '../AdminTemPlate/addNewCourses'
import AddNewUsers from '../AdminTemPlate/addNewUser'
import AdminTemplate from '../AdminTemPlate/AdminTemplate'
import Courses from '../AdminTemPlate/Courses'
import Dashboard from '../AdminTemPlate/Dashboard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Carousel from '../pages/Home/Carousel'
import TuvanKhoahoc from '../pages/TuvanKhoahoc/TuvanKhoahoc'
type Props = {}

export default function HomeTemplate({ }: Props) {
  return (
    <>
      <Header />
      < Menu />
      <div style={{ minHeight: 600 ,paddingTop:'160px'}}>
        <Outlet />
      </div>
      <Footer />
      

    </>
  )
}