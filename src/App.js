import './App.css';
import { useState } from 'react';

export default function App() {
  const [todoItemList, setTodoItemList] = useState([])


  function createItemList(e) {
    e.preventDefault();
    const copyTodoItemList = todoItemList.concat(e.target[0].value)
    setTodoItemList(copyTodoItemList)
    e.target[0].value = ""

  }

  return (
    <>
      <div>
        <ul>
          {todoItemList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
      <form onSubmit={createItemList}>
        <input type="text" />
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

