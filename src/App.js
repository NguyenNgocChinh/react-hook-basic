import React, { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList';
import FormTodoList from './components/FormTodoList';


function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Buoc 1' },
    { id: 2, title: 'Buoc 2' },
    { id: 3, title: 'Buoc 3' },
    { id: 4, title: 'Buoc 4' },
    { id: 5, title: 'Buoc 5' }
  ]);
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleFormSubmit(formvalues) {
    const newToDoList = [...todoList];
    newToDoList.push({
      id: todoList.length + Math.trunc(Math.random() * 23),
      ...formvalues
    });

    setTodoList(newToDoList);
  }

  return (
    <div className="app">
      <h1>React Hook - TodoList</h1>
      <FormTodoList onSubmitForm={handleFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
