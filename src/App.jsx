import React, { useEffect, useState } from "react";
import './index.css'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [todo, setTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if(!todo){
    }else{
      setTodos([todo, ...todos ]);
      setTodo('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index - 1, 1);
    setTodos(newTodos);
  }


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  return (
    <div className="container mx-auto">
      <div className="max-w-[500px] h-[100vh] mx-auto bg-blue-100 px-4">
        <h1 className="text-center text-xl font-bold text-blue-600 pt-4 underline">React App - Todo List</h1>
        <form onSubmit={submitHandler} className="mb-8 mt-4 flex gap-x-4">
          <input name="todo" value={todo} onChange={(e) => setTodo(e.target.value)} className="w-full rounded-md px-3 focus:outline-0" type="text" placeholder="Create New Todo" />
          <button type="submit" className="bg-blue-400 py-2 px-4 rounded-md text-white font-semibold">Add</button>
        </form>
        {
          todos.length === 0 ? <h1 className="text-center font-bold text-red-500">belum ada data</h1> :
            todos.map((todo, index) => (
              <div key={index} className="content_list">
                <div className="flex justify-between text-lg border-b-2 border-gray-500 py-2">
                  <div className="flex gap-x-4">
                    <span>{index + 1}</span>
                    <p>{todo}</p>
                  </div>
                  <div className="flex gap-x-2">
                    <button  className="bg-green-500 rounded-md hover:bg-green-600 px-2 hover:text-white"><i className="ri-edit-box-line"></i></button>
                    <button onClick={() => deleteTodo(index + 1)} className="bg-red-500 rounded-md hover:bg-red-600 px-2 hover:text-white"><i className="ri-delete-bin-6-line"></i></button>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default App;