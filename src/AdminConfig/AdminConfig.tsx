import { applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import { CoursesReducer } from "../AdminReducer/CoursesReducer";
import { CategoryCoursesReducer } from "../AdminReducer/CategoryCoursesReducer";
import { UserManagermentReducer } from "../AdminReducer/UserManagermentReducer";
import { CoursesAdminReducer } from "../AdminReducer/CoursesAdminReducer";

const rootReducer = combineReducers({
    //state ứng dụng
    CoursesReducer,
    CategoryCoursesReducer,
     UserManagermentReducer,
     CoursesAdminReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))