import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();

    return (
        <li className="list-group-item">
        <input defaultValue={todo.title}
            onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
        <button className="btn btn-warning m-2" onClick={() => dispatch(updateTodo(todo))}
                  id="wd-update-todo-click"> Update </button>
          <button className="btn btn-success m-2" onClick={() => dispatch(addTodo(todo))}
                  id="wd-add-todo-click"> Add </button>
          
          
        </li>
    );}
    
  