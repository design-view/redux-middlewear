import { combineReducers } from "redux";
import todos from "./todos";
//한프로젝트에 여러개의 리듀서가 있을경우
//하나의 리듀서로 합쳐서 사용
//합쳐진 리듀서를 루트리듀서
//combineReducers({ key: value })
const rootReducer = combineReducers({ todos: todos}) 
export default rootReducer;