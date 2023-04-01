import React from "react";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([todo, ...todos]);
    setTodo("");
  };
  
  return (
    <div className="container mx-auto w-[500px] h-[100vh] bg-blue-100 px-4">
      <h1 className="text-center text-xl font-bold text-blue-600 pt-4 underline">React App - Todo List</h1>
      <form onSubmit={submitHandler} className="mb-8 mt-4 flex gap-x-4">
        <input name="todo" value={todo} onChange={(e) => setTodo(e.target.value)} className="w-full rounded-md px-3 focus:outline-0" type="text" placeholder="Create New Todo" />
        <button type="submit" className="bg-blue-400 py-2 px-4 rounded-md text-white font-semibold">Add</button>
      </form>
      {
        todos.length === 0 ? <h1>belum ada data</h1> : 
          todos.map((todo, index) => (
            <div className="content_list">
              <div className="flex justify-between text-lg border-b-2 border-gray-500 py-2">
                <div className="flex gap-x-4">
                  <span>{index + 1}</span>
                  <p>{todo}</p>
                </div>
                <div className="flex gap-x-2">
                  <button  className="bg-green-500 rounded-md hover:bg-green-600 px-2 hover:text-white"><i class="ri-edit-box-line"></i></button>

                  <button className="bg-red-500 rounded-md hover:bg-red-600 px-2 hover:text-white"><i class="ri-delete-bin-6-line"></i></button>
                </div>
              </div>
            </div>
          ))
      }
    </div>
  )
}

export default App;