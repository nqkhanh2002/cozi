import { combineReducers } from "redux";

import letters from './letters';
import auth from './auth'

export default combineReducers({ letters, auth });