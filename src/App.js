import './App.css';
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useState, useRef } from 'react';

export default function App() {
  const [todoItemList, setTodoItemList] = useState(["eat kimchi", "update Portfolio"])
  const inputForm = useRef(null)

  function createItem(e) {
    e.preventDefault();
    const copyTodoItemList = todoItemList.concat(e.target[0].value)
    setTodoItemList(copyTodoItemList)
    e.target[0].value = ""
  }

  function updateItem(i) {

  }

  function deleteItem(i) {
    const copyTodoItemList = [...todoItemList]
    copyTodoItemList.splice(i, 1)
    setTodoItemList(copyTodoItemList)
  }

  return (
    <>
      <div>
        <ul>
          {todoItemList.map((item, i) => {
            return (
              <li key={i}>{item}
                <button onClick={() => updateItem(i)}><FaPen /></button>
                <button onClick={() => deleteItem(i)}><FaTrashAlt key={i} /></button>
              </li>)
          })}
        </ul>
      </div>
      <form onSubmit={createItem} ref={inputForm}>
        <input type="text" />
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

