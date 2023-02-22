//1.액션타입
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const DEL_TODO = "todos/DEL_TODO";
//2.액션생성함수
let nextId = 1;
// [{id:1, text: "할일", isDone: false},{id:1, text: "할일",isDone: false}
//,{id:1, text: "할일",isDone: false}]
// { type:ADD_TODO, todo: {id:새로운번호 , text: "새로운할일"}}
// addTodo("리액트 공부하기")
// { type: ADD_TODO, todo: {id:1, text: "리액트 공부하기"} }
// dispatch(addTodo("리액트 공부하기"))
export const addTodo = (text) => ({ 
    type: ADD_TODO, 
    todo: { 
        id: nextId++, 
        text: text,
        isDone: false
    } 
})
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})
export const delTodo = (id) => ({
    type: DEL_TODO,
    id: id
})
//3.리듀서함수
export default function todos(state=[],action){
    switch(action.type){
        case ADD_TODO: 
            return [
                ...state,
                action.todo
            ];
        case DEL_TODO:
            return state.filter(todo => todo.id !== action.id );
        case TOGGLE_TODO: 
            return state.map(todo=> todo.id === action.id ? //아이디가 일치하는지?
            { ...todo, isDone:!todo.isDone } :   //일치하면 isDone반전 시키기
            todo                                 // 일치하지않으면 원래값 리턴 
            )
        default:
            return state;
    }
}