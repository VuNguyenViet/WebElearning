import React from "react";
import { Router } from "react-router-dom";
import { store } from "../src/AdminConfig/AdminConfig";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import AdminTemplate from "./AdminTemPlate/AdminTemplate";
import Dashboard from "./AdminTemPlate/Dashboard";
import Courses from "./AdminTemPlate/Courses";
import Users from "./AdminTemPlate/Users";
import AddNewCourses from "./AdminTemPlate/addNewCourses";
import EditCourse from "./AdminTemPlate/editCourse"; 
import addNewUser from "./AdminTemPlate/addNewUser";

export const history = createBrowserHistory();

function App() {
  return (

    <Provider store={store}>
        <AdminTemplate path="/admin" exact Component={Dashboard} />
        <AdminTemplate path="/admin/dasboard" exact Component={Dashboard} />
        <AdminTemplate path="/admin/courses" exact Component={Courses} />
        <AdminTemplate
          path="/admin/courses/add-new"
          exact
          Component={AddNewCourses}
        />
        <AdminTemplate
          path="/admin/courses/edit/:id"
          exact
          Component={EditCourse}
        />
        <AdminTemplate path="/admin/users" exact Component={Users} />
        <AdminTemplate
          path="/admin/users/add-new"
          exact
          Component={addNewUser}
        />
      
    </Provider>
  );
}

export default App;
