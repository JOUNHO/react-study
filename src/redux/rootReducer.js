import { combineReducers } from "redux";
import authReducer from './authRedcer';
import colorReducer from './colorReducer'
const rootReducer = combineReducers({
  colorReducer,
  authReducer
})
export default rootReducer;