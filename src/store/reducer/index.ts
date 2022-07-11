import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user";


// 3. 合并reducer
const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;