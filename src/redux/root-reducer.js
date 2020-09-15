import { combineReducers } from "redux/es/redux";

import userReducer from './user/user.reducer'

export default combineReducers({
    user: userReducer
});
