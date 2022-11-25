import React from 'react'
import AddNewCourses from '../AdminTemPlate/addNewCourses'
import AddNewUsers from '../AdminTemPlate/addNewUser'
import AdminTemplate from '../AdminTemPlate/AdminTemplate'
import Courses from '../AdminTemPlate/Courses'
import Dashboard from '../AdminTemPlate/Dashboard'
import EditCourse from '../AdminTemPlate/editCourse'
import User from '../AdminTemPlate/Users'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import {NavLink} from 'react-router-dom'
// import "../../src/assets/styles.css"
type Props = {}

export default function Admin({}: Props) {
  return (
    <>
    < Header /> 
     <Menu />
    <div style={{paddingTop:'200px'}}>
    <Dashboard/>
    </div>
    <User />
    
    <AddNewUsers/>
    <Courses/>
    <AddNewCourses/>
    <Footer />
    </>
  )
}