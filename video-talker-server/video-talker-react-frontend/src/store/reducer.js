import { combineReducers } from "redux";
import dashboardReducer from './reducers/dashboardReducer'

export default combineReducers({
    dasdhboard: dashboardReducer
})