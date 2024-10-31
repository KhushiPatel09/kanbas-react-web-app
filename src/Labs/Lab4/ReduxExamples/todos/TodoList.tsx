import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";



export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
//   const [todos, setTodos] = useState([
//     { id: "1", title: "Learn React" },
//     { id: "2", title: "Learn Node"  }]);
//   const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
//   const addTodo = (todo: any) => {
//     const newTodos = [ ...todos, { ...todo,
//       id: new Date().getTime().toString() }];
//     setTodos(newTodos);
//     setTodo({id: "-1", title: ""});
//   };
//   const deleteTodo = (id: string) => {
//     const newTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(newTodos);
//   };
//   const updateTodo = (todo: any) => {
//     const newTodos = todos.map((item) =>
//       (item.id === todo.id ? todo : item));
//     setTodos(newTodos);
//     setTodo({id: "-1", title: ""});

//   };
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">

        {/* <li className="list-group-item">
        <input defaultValue={todo.title}
            onChange={(e) =>
              setTodo({ ...todo,
                title: e.target.value })
            }
          />
          <button className="btn btn-warning m-2" onClick={() => updateTodo(todo)}
                  id="wd-update-todo-click">
            Update </button>
            <button className="btn btn-success m-2" onClick={() => addTodo(todo)}
                  id="wd-add-todo-click">Add</button>
          
        </li>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}

             <button className="btn btn-primary m-2" onClick={() => setTodo(todo)}
                    id="wd-set-todo-click">
              Edit </button>
            <button className="btn btn-danger m-2" onClick={() => deleteTodo(todo.id)}
                    id="wd-delete-todo-click">
              Delete </button>
           
          </li> */}

        <TodoForm />
            {todos.map((todo: any) => (
            <TodoItem todo={todo} />
            ))}

      </ul>
      <hr/>
    </div>
  );
}

