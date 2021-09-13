import { combineReducers } from "redux";
import global from "./globalReducer"
import users from "./usersReducers"

const rootReducer = combineReducers({ global, users });

export default rootReducer;