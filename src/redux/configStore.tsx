import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/productReducer'
import registerReducer from './reducers/ListDanhmucReducer'
import userReducer from './reducers/userReducer'
import ListDanhmucReducer from './reducers/ListDanhmucReducer'
import { CoursesReducer } from "../AdminReducer/CoursesReducer";
import { CategoryCoursesReducer } from "../AdminReducer/CategoryCoursesReducer";
import { UserManagermentReducer } from "../AdminReducer/UserManagermentReducer";
import { CoursesAdminReducer } from "../AdminReducer/CoursesAdminReducer";
// ...

export const store = configureStore({
  reducer: {
    productReducer:productReducer,
    userReducer:userReducer,
    ListDanhmucReducer:ListDanhmucReducer,
    CoursesReducer: CoursesReducer,
    CategoryCoursesReducer: CategoryCoursesReducer,
     UserManagermentReducer: UserManagermentReducer,
    CoursesAdminReducer: CoursesAdminReducer
    
  
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch